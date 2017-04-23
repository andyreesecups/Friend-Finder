var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var router = express.Router();

//Send index.html when home route is hit. req = request and res = response.
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


//When newEmployee route is hit, send newEmployee.html
router.get('/questions', function(req, res) {
    res.sendFile(path.join(__dirname, "questions.html"));
});



//export our router so server can use it.
module.exports = router;