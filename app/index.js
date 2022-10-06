const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const multer = require('multer');

const client = require('./db');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

//using ejs
app.set('view engine', 'ejs');
/**
 * Middle Ware
 */

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getDate() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, true);
  }
};

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
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
    // res.json(AllProject.rows);
    res.render('project', { AllProject: AllProject.rows, msg: req.flash('msg'), AllProjectCount: AllProject.rowCount });
  } catch (e) {
    console.error(e.message);
  }
});

app.get('/project/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await client.query('SELECT * FROM project WHERE id_project=$1', [id]);
    res.render('detailProject', { project: project.rows });
  } catch (e) {
    console.error(e.message);
  }
});

app.post('/project', async (req, res) => {
  try {
    const { title, desc } = req.body;
    const image = req.file;
    res.send(req.file);
    // const newProject = await client.query(`INSERT INTO project (judul_project,gambar_project, desc_project) VALUES ($1,$2 , $3) RETURNING *`, [title, image, desc]);
    // req.flash('msg', 'Project berhasil ditambahkan');
    // res.redirect('/project');
  } catch (e) {
    console.error(e.message);
  }
});

app.post('/project/edit', async (req, res) => {
  // res.send(req.body);
  const { id, title, desc, image } = req.body;
  const editProject = await client.query('update project set judul_project=$2, gambar_project=$3, desc_project=$4 where id_project=$1', [id, title, image, desc]);
  res.redirect('/project');
});

// delete method
app.get('/delete/:id', async (req, res) => {
  const deleteProject = await client.query('DELETE FROM project WHERE id_project=$1', [req.params.id]);
  req.flash('msg', 'Project berhasil dihapus');
  res.redirect('/project');
});

app.get('/input_project', (req, res) => {
  res.render('input_project');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
