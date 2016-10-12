var express = require("express");
var app = express();


app.use(express.static("./app/dist"));




app.listen(3000,function(){
    console.log("Started listening on port", 7777);
})