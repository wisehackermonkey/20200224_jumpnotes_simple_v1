"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//express.js setup (web server)
// https://expressjs.com/en/starter/hello-world.html
var app = (0, _express2.default)(); //jump notes main server 
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

var PORT = 3000;

app.get("/v1/note/:data", function (req, res) {
    res.send("Works");
});

app.listen(PORT, function () {
    console.log("Jump Notes Server has started");
    console.log("Url: http://localhost:" + PORT);
});
//# sourceMappingURL=app.js.map