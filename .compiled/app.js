"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _check = require("express-validator/check");

var _filter = require("express-validator/filter");

var _lowdb = require("lowdb");

var _lowdb2 = _interopRequireDefault(_lowdb);

var _FileSync = require("lowdb/adapters/FileSync");

var _FileSync2 = _interopRequireDefault(_FileSync);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//express.js setup (web server)
// https://expressjs.com/en/starter/hello-world.html

//https://github.com/typicode/lowdb

//3d party libraries
var app = (0, _express2.default)();

//custom scripts

//https://expressjs.com/en/starter/hello-world.html
//jump notes main server 
//manages saving notes
//by oran c wisehacker monkey
//20200224

/*
x web page with text box
x api endpoint
x save to json function
-dockerize
- host
- finish form setup [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms]
- button save

*/

var PORT = 3000;
var INDEX_PATH = "/../web/index.html";

//lowdb simple json database setup
var adapter = new _FileSync2.default('db.json');
var db = (0, _lowdb2.default)(adapter);

(0, _helpers.initalizeDatabase)(db);

app.use(_express2.default.urlencoded());

app.use(_express2.default.static('web'));

// app.post("/v1/note/save/:data",(req,res)=>{
//     let note_data = req.params.data
//     DabaseSaveNote(db,note_data)
//     res.send("Note has been saved to database");
// })

app.post("/v1/note/save/", function (req, res) {
    var note_data = req.body.data;
    (0, _helpers.DabaseSaveNote)(db, note_data);
    console.log(req.body);
    res.send("Note has been saved to database");
});

app.post("/team_name_url", function (req, res) {
    console.log(req);
    res.end();
});

app.post('/submit-form', function (req, res) {
    var username = req.body.username;
    console.log(username);

    //...
    res.send('POST successful');
    res.end();
});

// //display the main page
// app.get("/",(req,res)=>{
//     let index_path = "C:/Users/oranm/github/20200224_jumpnotes_simple_v1/web/index.html"
//     res.sendFile(express.static('web')) //("Please use post version of the endpoint instead of get, thanks.");
// })
// app.get("/v1/note/save/:data",(req,res)=>{
//     res.send("Please use post version of the endpoint instead of get, thanks.");
// })
app.listen(PORT, function () {
    console.log("Jump Notes Server has started");
    console.log("Url: http://localhost:" + PORT);
});
//# sourceMappingURL=app.js.map