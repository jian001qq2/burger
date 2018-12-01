//Dependencies 
var express = require('express');
var exphbs = require("express-handlebars");
var methodOver = require("method-override")
var bodyParser = require('body-parser')
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");


//set the port
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));



// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Given access to routes
app.use(routes);
// Override with POST having ?_method=DELETE
app.use(methodOver("_method"));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
