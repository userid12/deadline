/**
 * Created by akc on 9/9/16.
 */


var express=require("express");//call express
var app=express();//define our app using express

var bodyParser = require('body-parser');//call body-parser
var mysql=require("mysql");//call mysql
var connection =require('express-myconnection');//call express-myconnection

//configure app to use bodyparser()
//this will let us get the data from the POST

app.use(bodyParser.json());// to support json
app.use(bodyParser.urlencoded({ extended: true }));//to support

app.use(express.static(__dirname + '/'));
console.log("static files initialized..");

app.use(connection(mysql, {
    host: 'localhost',
    user: 'ui',
    password: 'ui1234',
    database: 'db'
},'request'));

app.get("/",function(req,res){
    res.redirect('/views/index.html');
});

//GET
app.get("/service/person",function (req,res,next) {

    var ids=[];
    var query ="SELECT * FROM PERSON";
    req.getConnection(function (err,connection) {
        if(err) return next(err);

        connection.query(query,ids,function (err,results) {
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });
    });
});



app.get("/service/person/:personid",function (req,res,next) {
    var ids=[];
    var personid=req.params.personid;
    ids.push(personid);
    var query ="SELECT * FROM PERSON where personid = ?";
    req.getConnection(function (err,connection) {
        if(err) return next(err);

        connection.query(query,ids,function (err,results) {
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });
    });
});


//setting up the static filed for hosting
app.use(express.static(__dirname + '/'));//create shopping cart as a root

//routing
app.get('/index', function(req, res){
    res.redirect('/views/index.html');
});


//end of routing
//launching app on local host:8080;
app.listen(8080, function(){
    console.log('server loaded on port 8080');
});

//coz if we define jquery with angular. variable withing the fucntion wont be added coz of scope. if we expeect the variable to be changing it wont be.
//directives are used DOM manupulation.

