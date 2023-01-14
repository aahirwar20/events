var mongoose= require('mongoose');
//const { route } = require('.');
require('dotenv').config();
//const MongoStore = require('connect-mongo');
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODBKEY);

var event_schema =mongoose.Schema({                       //schema for new sign up 
         S_no:Number,
        name:String,
        topic:String,
        time:String,
        date:String,
        venue:String,
        About:String,

});

var event =mongoose.model("event",event_schema)

module.exports ={event}
