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

    var query ="SELECT * FROM customer";
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


app.get("/service/customer/:id",function (req,res,next) {
    var ids=[];
    var customerid=req.params.customerid;
    ids.push(customerid);
    var query ="SELECT * FROM customer where customerid= ?";
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
/*
app.get("/service/inventory_type/:name",function (req,res,next) {
    var ids=[];
    var name=req.params.name;
    ids.push(name);
    var query ="SELECT * FROM inventory_type where name = ?";
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
//
// */
// app.get("/service/inventory_type",function (req,res,next) {
//     var ids=[];
//
//     var query ="SELECT * FROM inventory_type";
//     req.getConnection(function (err,connection) {
//         if(err) return next(err);
//
//         connection.query(query,ids,function (err,results) {
//             if(err){
//                 console.log(err);
//                 return next("Mysql error, check your query");
//             }
//             res.json(results);
//
//         });
//     });
// });

//
// //CREATE
//
// //Sample from template services
// var url="/service/customer/";
// var query="INSERT INTO customer SET ?";
// var data=['customerid','name','address','city','zipcode','email','phoneno','active'];
//
// //passing values into services
//
// postservice(url,query,data);
//
// //end of post service template
// function postservice(url,sqlquery,data){
//
// app.post('url', function(req,res,next){//URL
//     try{
//         var reqObj = req.body;
//       // console.log(reqObj);
//         req.getConnection(function(err, conn){
//             if(err)
//             {
//                 console.error('SQL Connection error: ', err);
//                 return next(err);
//             }
//             else
//             {
//                 var insertSql = sqlquery;//SQL query
//                 var insertValues= {};
//                 for(var i = 0;i<data.length; i++){
//                     insertValues[data[i]]=reqObj[data[i]];
//                 }
//                // next(insertValues);
//
//                 // var insertValues = {
//                 //     "customerid" : reqObj.customerid,
//                 //     "name" : reqObj.name,
//                 //     "address" : reqObj.address,
//                 //     "city": reqObj.city,
//                 //     "zipcode": reqObj.zipcode,
//                 //     "email": reqObj.email,
//                 //     "phoneno": reqObj.phoneno,
//                 //     "active": reqObj.active
//                 // };//parameter
//
//                 var query = conn.query(insertSql, insertValues, function (err, result){
//                     if(err){
//                         console.error('SQL error: ', err);
//                         return next(err);
//                     }
//                     console.log(result);
//                     var name_Id = result.insertId;
//                     res.json({"name":name_Id});
//
//                 });
//             }
//         });
//     }
//     catch(ex){
//         console.error("Internal error:"+ex);
//         return next(ex);
//     }
// });
// }
//
// //UPDATE
// app.put('/service/customer/:customerid', function(req,res,next){
//     try{
//         var reqObj = req.body;
//         console.log(reqObj);
//         var customerid=req.params.customerid;
//         req.getConnection(function(err, conn){
//             if(err)
//             {
//                 console.error('SQL Connection error: ', err);
//                 return next(err);
//             }
//             else
//             {
//                 var insertSql = "UPDATE customer SET ? where customerid=?";
//                 var insertValues = {
//                     "name" : reqObj.name,
//                     "address" : reqObj.address,
//                     "city": reqObj.city,
//                     "zipcode": reqObj.zipcode,
//                     "email": reqObj.email,
//                     "phoneno": reqObj.phoneno,
//                     "active": reqObj.active
//                 };
//
//                 var query = conn.query(insertSql, [insertValues, customerid], function (err, result){
//                     if(err){
//                         console.error('SQL error: ', err);
//                         return next(err);
//                     }
//                     console.log(result);
//                     // var name_Id = result.insertId;
//                     res.json(result);
//
//                 });
//             }
//         });
//     }
//     catch(ex){
//         console.error("Internal error:"+ex);
//         return next(ex);
//     }
// });
//
// //DElETE
// app.delete('/service/customer/:customerid', function(req,res, next){
//
//     var ids=[];
//     var customerid=req.params.customerid;
//     ids.push(customerid);
//     var query = "DELETE FROM customer  WHERE customerid = ?";
//     req.getConnection(function (err, connection) {
//         if(err) return next(err);
//         connection.query(query, ids, function(err, results)
//         {
//             if(err)
//                 console.log("Error deleting : %s ",err );
//
//             res.json(results);
//         });
//
//     });
// });

//setting up the static filed for hosting
app.use(express.static(__dirname + '/'));//create shopping cart as a root

//routing
app.get('/index', function(req, res){
    res.redirect('/views/index.html');
});

app.get('/home', function(req, res){
    res.redirect('/views/home.html');
});

app.get('/game', function(req, res){
    res.redirect('/views/game.html');
});

app.get('/electronics', function(req, res){
    res.redirect('/views/electronics.html');
});
app.get('/landing', function(req, res){
    res.send('In landing page');
});

//end of routing
//launching app on local host:8080;
app.listen(8080, function(){
    console.log('server loaded on port 8080');
});

//coz if we define jquery with angular. variable withing the fucntion wont be added coz of scope. if we expeect the variable to be changing it wont be.
//directives are used DOM manupulation.

