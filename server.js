

import  express from "express";
import  * as path from "path"
import { domainToUnicode } from "url";

import bodyParser from 'body-parser';
 
import Publication from "./pub.js"

 
 


let app = express() 
let port = 4000; 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let info = []; 
   
    
 
 
 
 
 

app.post("/news", function(req, res) {
    let pub = new Publication(req.body.title, req.body.description);
    info.push(pub);
    // console.log(info.description); 
    res.render("news.ejs", {
        INF: info
    });
});


app.get("/" , function(req  ,res){
    res.render("index.ejs" , {}); 
    
})

app.get("/news" , function(req  ,res){
    res.render("news.ejs", {
        INF: info
    });
    
    
})

app.get("/about" , function(req  ,res){
    res.render("about.ejs", {
        INF: info
    });
    
    
})


app.listen(port , "0.0.0.0", function(){
    console.log(`server on : http/localhost:${port}`); 
})


