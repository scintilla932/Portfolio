const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8000;


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  //For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.engine('pug', require('pug')._express);
app.set('view engine', 'pug');   //Set the template engine as pug
app.set('views',path.join(__dirname, 'views'));  //Set the view directory as

//ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('index.pug', params);
});


//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started succesfully on ${port}`);
});
