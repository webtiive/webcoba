const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const client = require('./db');
const app = express();
const PORT = process.env.Port || 8080;

//using ejs
app.set('view engine', 'ejs');
// static file ejs
app.use(express.static('views'));
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
    cb(null, false);
  }
};

app.use(bodyParser.json());
app.use(cors()); // Handles cross orign request errors
app.use(express.urlencoded({ extended: true })); // Understand fetch requests
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).array('image', 15));

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
 * Function
 */

const removeImage = (filePath) => {
  filePath = path.join(__dirname, filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

/**
 * Client Routes
 */

//home
app.get('/', (req, res) => {
  res.render('index');
});

// about us route
app.get('/teamprofile', (req, res) => {
  res.render('./menu/teamprofile');
});

app.get('/activity', (req, res) => {
  res.render('./menu/activity');
});

app.get('/testimony', (req, res) => {
  res.render('./menu/testimony');
});

/* 

our service route 

*/

// our service
app.get('/2Dlayout', (req, res) => {
  res.render('./menu/2dlayout');
});

app.get('/3Drendering', (req, res) => {
  res.render('./menu/3drendering');
});

app.get('/industrialgallery', (req, res) => {
  res.render('./menu/industrialgal');
});

app.get('/budgetingplan', (req, res) => {
  res.render('./menu/budgetingplan');
});

// building construction
app.get('/buildingconstruction', (req, res) => {
  res.render('./menu/building');
});

/**
 * end our service route
 */

// portfolio route

app.get('/allportofolio', async (req, res) => {
  try {
    const AllProject = await client.query('SELECT * FROM project');
    // res.json(AllProject.rows);
    res.render('./menu/allportofolio', { AllProject: AllProject.rows });
  } catch (e) {
    console.error(e.message);
  }
});

app.get('/portofolio/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await client.query('SELECT * FROM project WHERE id_project=$1', [id]);
    // res.send(project.rows);
    res.render('./menu/portofolio', { project: project.rows });
  } catch (e) {
    console.error(e.message);
  }
});

// contact us route

app.get('/contact', (req, res) => {
  res.render('./menu/contact');
});

/*
  Admin Routes

*/

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
    // res.send(project.rows);
    res.render('detailProject', { project: project.rows });
  } catch (e) {
    console.error(e.message);
  }
});

app.post('/project', async (req, res) => {
  try {
    const { title, desc, select } = req.body;
    const image = req.files;
    const newProject = await client.query(`INSERT INTO project (judul_project,desc_project,gambar_project, select_project ) VALUES ($1,$2 , $3, $4) `, [title, desc, image, select]);
    req.flash('msg', 'Project berhasil ditambahkan');
    res.redirect('/project');
    // res.send(req.body.select);
  } catch (e) {
    console.error(e.message);
  }
});

/* 

  UPDATE METHOD 

*/
app.post('/project/edit', async (req, res) => {
  // res.send(req.body);
  const { id, title, desc, select } = req.body;
  try {
    if (req.files.length === 0) {
      const editProject = await client.query('update project set judul_project=$2, desc_project=$3,select_project=$4 where id_project=$1', [id, title, desc, select]);

      // res.send(req.body);
    } else {
      const image = req.files;
      const editProject = await client.query('update project set judul_project=$2,gambar_project=$3, desc_project=$4 ,select_project=$5 where id_project=$1', [id, title, image, desc, select]);
      // res.send(image);
    }
    req.flash('msg', 'Project berhasil diubah');
    res.redirect('/project');
  } catch (e) {
    console.error(e.message);
  }
  // res.redirect('/project');
  // res.send(req.body);
});

/*
    DELETE METHOD
 */

//delete all projects
app.post('/delete/:id', async (req, res) => {
  const { image } = req.body;
  image.forEach((e) => {
    removeImage(e);
  });
  // removeImage(image);
  const deleteProject = await client.query('DELETE FROM project WHERE id_project=$1', [req.params.id]);

  req.flash('msg', 'Project berhasil dihapus');
  res.redirect('/project');
  // res.send(image);
});

// delete single image
app.get('/detailProject/:id', async (req, res) => {
  // const { image } = req.body;

  const { id } = req.params;
  removeImage(`images/${id}`);
  req.flash('msg', 'Gambar berhasil dihapus');

  // res.redirect('/detailProject');
});

/**
 *
 * END DELETE METHOD
 *
 */

app.get('/input_project', (req, res) => {
  res.render('input_project');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
