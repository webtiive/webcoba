const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const client = require('./db');
const app = express();
const PORT = 3000;

/**
 * Middle Ware
 */

app.use(bodyParser.json());
app.use(cors()); // Handles cross orign request errors
app.use(express.urlencoded({ extended: true })); // Understand fetch requests

/**
 * Routes
 */

console.log(client);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/project', async (req, res) => {
  try {
    const AllProject = await client.query('SELECT * FROM project');

    res.json(AllProject.rows);
  } catch (e) {
    console.error(e.message);
  }
});

app.post('/project', async (req, res) => {
  try {
    const { title, desc, image } = req.body;
    const newProject = await client.query(`INSERT INTO project (judul_project, gambar_project, desc_project) VALUES (${title}, ${image}, ${desc})`);
    res.json(newProject);
  } catch (e) {
    console.error(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
