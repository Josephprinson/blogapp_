const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://joseph:abcd@cluster0.mnwedsm.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
    console.log("db conncted")
  })

.catch((error)=>{
    console.log(error)
})