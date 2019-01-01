const express = require("express");

// set up express app
const app = express();



// listen for requests
app.listen(4000, function() {
    console.log('now listening for requests');
});
