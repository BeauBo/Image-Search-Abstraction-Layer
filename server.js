const express = require('express');
const routers = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.use(routers);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchTerms');


app.listen(process.env.PORT || 3000, ()=>{
  console.log("listening for requests!")
})
