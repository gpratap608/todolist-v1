const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var works = ["Buy Food","Cook Food","Eat Food"];


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public")); 





app.get("/",function(req,res){
    var today = new Date;
    var day = "" ;

var option = {
    weekday : 'long',
    day : 'numeric',
    month: 'long'
}
  day=today.toLocaleDateString("en-UK",option);  
    res.render("index",{
        kindOfDay:day,
        newWork:works
    });
})
app.post("/",function(req,res){
    var work = req.body.Item;
    works.push(work);
    res.redirect("/");
    
})
app.listen(process.env.port||3000,function(){
    console.log("Server started at port 3000");
})