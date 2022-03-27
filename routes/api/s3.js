require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const keys = require("../../config/keys_dev")
const bucketName = keys.S3_BUCKET
const accessKeyId = keys.AWS_ACCESS_KEY_ID
const secretAccessKey = keys.AWS_SECRET_ACCESS_KEY
const region = keys.AWS_REGION

// const bucketName = process.env.S3_BUCKET
// const region = process.env.AWS_REGION
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY



const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
function uploadFile(file) {
  console.log('keys')
  console.log(bucketName)
  console.log(region)
  console.log(accessKeyId)
  console.log(secretAccessKey)
  
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: "pichaven",
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile


// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream