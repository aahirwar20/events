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
  })

  event_obj.save(function(err,data){
    if(err) res.send(data)
    else{ res.send(data)}
  })
})


module.exports = router;
