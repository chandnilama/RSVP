const AWS = require('aws-sdk')
const keys = require("../../config/keys_dev")
const S3_BUCKET = keys.S3_BUCKET
const AWS_ACCESS_KEY_ID = keys.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = keys.AWS_SECRET_ACCESS_KEY
// const S3_BUCKET = process.env.S3_BUCKET;
// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
// const AWS_SECRET_ACCESS_KEY =process.env.AWS_SECRET_ACCESS_KEY;

const express = require("express");
const fileUpload = require('express-fileupload')
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');


const Post = require('../../models/Post');
const validatePostInput = require("../../validation/posts");

const multer = require('multer');
const multerS3 = require('multer-s3');
const fs = require('fs');
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const upload = multer({dest: 'uploads/'})

const { uploadFile, getFileStream } = require('./s3')


router.get("/test", (request, response) => response.json({msg: "The posts route is working"}));


router.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

router.post('/images', upload.single('image'), async (req, res) => {
    console.log(S3_BUCKET)
    console.log(AWS_ACCESS_KEY_ID)
    console.log(AWS_SECRET_ACCESS_KEY)

    console.log('=========')
  const file = req.file
  console.log(file)

  
  const result = await uploadFile(file)
  
  await unlinkFile(file.path)
  
  console.log(result)
  const description = req.body.description
  res.send({imagePath: `/images/${result.Key}`})
})



module.exports = router;