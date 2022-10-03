const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const client = require('./db');
const app = express();
const PORT = 3000;

//using ejs
app.set('view engine', 'ejs');
/**
 * Middle Ware
 */

app.use(bodyParser.json());
app.use(cors()); // Handles cross orign request errors
app.use(express.urlencoded({ extended: true })); // Understand fetch requests

/**
 * flash config
 */

app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    saveUninitialized: true,
  })
);
app.use(flash());

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/project', async (req, res) => {
  try {
    const AllProject = await client.query('SELECT * FROM project');
    const projectRows = AllProject.rows;
    res.render('project', { projectRows });
  } catch (e) {
    console.error(e.message);
  }
});

app.post('/project', async (req, res) => {
  try {
    const { title, desc, image } = req.body;
    console.log(req.body);
    const newProject = await client.query(`INSERT INTO project (judul_project,gambar_project, desc_project) VALUES ($1,$2 , $3) RETURNING *`, [title, image, desc]);
    res.redirect('/project');
  } catch (e) {
    console.error(e.message);
  }
});

app.get('/input_project', (req, res) => {
  res.render('input_project');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
