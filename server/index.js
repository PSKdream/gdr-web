let express = require("express"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    database = require("./database"),
    bodyParser = require("body-parser");
const createError = require('http-errors');
//connect mongodb
mongoose.Promise = global.Promise;
mongoose.connect(database.db,{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log('Database connected successfully');
},error =>{
    console.log('Cannot connect to database'+error)
})

const API = require('./routes/api.route');
const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

//API
app.use('/api',API)

//create port
// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }

const port = process.env.PORT || 4000;

const server = app.listen(port,()=>{
    console.log('Connected to port '+port);
})

//404 Handler
app.use((req,res,next)=>{
    next(createError(404))
})

//error Handler
app.use(function(err, req, res, next){
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})