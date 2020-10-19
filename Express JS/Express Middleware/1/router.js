// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

// ROUTES
// ==============================================


// get an instance of router
var router = express.Router();

app.use(express.static(__dirname + '/'));

		// home page route (http://localhost:8080)
		router.get('/', function(req, res)
		 {
		 res.sendFile( __dirname + "/" + "login.html" );  
			//res.send('im the home page!');  
		});

		// about page route (http://localhost:8080/about)
		router.get('/about', function(req, res)
		{
			res.send('im the about page!'); 
		});

		// apply the routes to our application
		app.use('/', router);


		// we'll create our routes here

			// START THE SERVER
			// ==============================================
			app.listen(port);
			console.log('Server running on port ' + port);