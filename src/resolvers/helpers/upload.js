const shortid = require('shortid')
const { createWriteStream, unlink } = require('fs')
const {google} = require('googleapis')
const credentials = require('./credentials.json')
const scopes = [
  'https://www.googleapis.com/auth/drive'
];
const auth = new google.auth.JWT(
  credentials.client_email,null,
  credentials.private_key,scopes
)

const drive = google.drive({
  version:'v3',
  auth
})

const storeUpload = async upload => {
  const {  createReadStream, filename, mimetype } = await upload
  console.log(upload);
  console.log( upload.file.createReadStream)
    console.log(filename)
    const id = shortid.generate()
    let docId=""
    let path = `https://drive.google.com/uc?export=view&id=${docId}`
  
    // Store the file in google
    try{
    const res = await drive.files.create({
      auth:auth,
      requestBody:{
        name: upload.file.filename, 
        mimeType: upload.file.mimetype,
        parents:['1_wFLsCwojVeVI1xFxFz8v_n2JemmhjiQ']
      },
      media:{
        mimeType:upload.file.mimetype,
        body: upload.file.createReadStream(path)
      }
    })
    docId= res.data.id
    path = `https://drive.google.com/uc?export=view&id=${docId}`
    console.log("success uploading",id)
  }
  catch(e){
    console.log("error uploading",e)
  }
  
  const file = { id, filename, mimetype, path }
    return file
  }
  module.exports={
      storeUpload
  }