"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _lowdb = require("lowdb");

var _lowdb2 = _interopRequireDefault(_lowdb);

var _FileSync = require("lowdb/adapters/FileSync");

var _FileSync2 = _interopRequireDefault(_FileSync);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//express.js setup (web server)
// https://expressjs.com/en/starter/hello-world.html

//https://github.com/typicode/lowdb

//jump notes main server 
//manages saving notes
//by oran c wisehacker monkey
//20200224

/*
web page with text box
button save
api endpoint
save to json function
dockerize
host
*/
//3d party libraries
var app = (0, _express2.default)();

//custom scripts

//https://expressjs.com/en/starter/hello-world.html

var PORT = 3000;

//lowdb simple json database setup
var adapter = new _FileSync2.default('db.json');
var db = (0, _lowdb2.default)(adapter);

(0, _helpers.initalizeDatabase)(db);

app.get("/v1/note/save/:data", function (req, res) {
    var note_data = req.params.data;
    //save note to json database
    db.get("notes").push({ text: note_data, time: Date.now() }).write();

    res.send("Note has been saved to database");
});

app.listen(PORT, function () {
    console.log("Jump Notes Server has started");
    console.log("Url: http://localhost:" + PORT);
});
//# sourceMappingURL=app.js.map