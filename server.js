//express
var express = require("express");
var app = express();
//mongo
var mongo = require("mongoskin");
var MongoServer = mongo.Server;
var MongoDb = mongo.Db;
var MongoClient = mongo.MongoClient;
//conf
var bdconf = require('./conf/db.conf');
//db
var dbmodles = require('./modles/DB_blog.js')

//静态文件
//app.use("/statics", express.static( __dirname + "/public" ));


app.get("/", function (req, res) {
    res.send("Hellow world!");
});

app.get("/hongkonglaoma", function (req, res) {
    res.send('香港老妈');
});

var db = new MongoDb('blog', new MongoServer(bdconf.local.host, bdconf.local.port));
console.log(dbmodles.User(db));
/*var testCollection = db.collection('blog', {strict: true});
testCollection.insert({"title": "test"}, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})*/

app.listen(3030);

console.log('server listen on 3030');
