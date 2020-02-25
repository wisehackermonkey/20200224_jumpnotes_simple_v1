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
x finish form setup [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms]
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

app.post("/v1/note/save/", [
// username must be an email
(0, _check.check)('data').isString().isLength({ min: 1 }).trim().escape()], function (req, res) {

    var errors = (0, _check.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var note_data = req.body.data;

    (0, _helpers.DabaseSaveNote)(db, note_data);

    var result_message = "Note has been saved to database:" + JSON.stringify(req.body);
    console.log(result_message);
    res.send(result_message);
});

app.listen(PORT, function () {
    console.log("Jump Notes Server has started");
    console.log("Url: http://localhost:" + PORT);
});
//# sourceMappingURL=app.js.map