var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


//When newEmployee route is hit, send newEmployee.html
app.get('/questions', function(req, res) {
    res.sendFile(path.join(__dirname, "questions.html"));
});





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Use javascript to grab and console name, picture, and question values
// App.post to post values into a centralized database (our api)
// We need logic to compare who in our database is mot compatible with the user
// Display who your lover will be