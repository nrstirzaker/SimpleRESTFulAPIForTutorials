
// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var nameGenerator = require('./nameGenerator.js');
var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'This service generates random ORC names using the data from http://www.heresy-online.net/forums/general-40k/74487-ork-warboss-name-generator.html' });   
});

router.get('/api/name', function(req, res) {
    res.json({ name: nameGenerator.getORCName(), thanksTo : 'http://www.heresy-online.net/forums/general-40k/74487-ork-warboss-name-generator.html' });   
});

router.get('/api/names', function(req, res) {
    var amount = req.query.amount || 1;
    var names = nameGenerator.getORCNames( amount );
    res.json({ names: names, thanksTo : 'http://www.heresy-online.net/forums/general-40k/74487-ork-warboss-name-generator.html' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
