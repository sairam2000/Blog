const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const {MONGO_URI} = require('./KEYS')
const auth = require('./routes/Auth')
const posts = require('./routes/Posts')
const user = require('./routes/User')
const categories = require('./routes/Categories')
const path = require("path");

const app = express()

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));



mongoose.connect(MONGO_URI,{ useUnifiedTopology: true, useNewUrlParser: true, 'useCreateIndex': true })
const db = mongoose.connection
db.on('connected',()=>{console.log('db connected')})
db.on('error',(err)=>{console.log(err)})



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });



app.use('/api/auth', auth)
app.use('/api/posts',posts)
app.use('/api/user', user)
app.use('/api/categories', categories)



app.listen(5000,()=>{console.log('app running at port 5000')})