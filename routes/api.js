const express = require('express');
const router = express.Router();
const qwant = require('qwant-api');
const SearchTerms = require('../models/searchTerms');


router.get('/api/imagesearch/:searchVal*', (req, res, next)=>{
  var {searchVal} = req.params;
  var {count} = req.query;
  var {offset} = req.query;
  //console.log(count, offset);
  var date = new Date();
  var dateFormattingOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }
  date = date.toLocaleDateString('en-us', dateFormattingOptions);
  var data = {
    term: searchVal,
    when: date
  }
  SearchTerms.create(data).then(function(){
    qwant.search("images",{query: searchVal, count: count, offset: offset}, (err, body)=>{
        var data = [];
        for(var i = 0; i<count; i++){
          data.push({
            url: body.data.result.items[i].url,
            snippet: body.data.result.items[i].title,
            thumbnail: "https:" + body.data.result.items[i].thumbnail,
            context: body.data.result.items[i].media
          });
        };
        res.json(data);
      });
  });
});

router.get('/api/latest/imagesearch', (req, res, next)=>{
  SearchTerms.find({}, {_id: false, term: true, when: true},function(err, data){
    if(err) throw err;
    res.json(data);
  })
})




module.exports = router;
