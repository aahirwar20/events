var express = require('express');
var router = express.Router();
var {event} =require('./database')

/* GET home page. */
router.get('/',function(req,res,next){
  res.send("hello")
})

router.post('/api/event',function(req,res,next){
  var event_obj=new event({
       S_no:req.body.id,
        name:req.body.name,
        topic:req.body.topic,
        time:req.body.time,
        date:req.body.date,
        venue:req.body.venue,
        About:req.body.detail,
        FormData:req.body.FormData
  })
//  console.log(event_obj)
  event_obj.save(function(err,data){
    if(err) res.send(data)
    else{ res.send(data)}
  })
})

router.get('/api/event',function(req,res,next){
  event.find(function(err,data){
    if(err) throw err;
    else{
      // console.log(data)
       res.send(data)}
  })})


router.post('/api/file-upload',function(req,res,next){
    console.log(req.body.formdata);
    res.send(req.body.formdata._parts[0][1].uri);
  })

module.exports = router;
