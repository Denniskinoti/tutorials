const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const methodOverRide = require('method-override');
const buyers = require('./routes/buyer');
const User = require('./model/buyer')
const expressSanitizer = require('express-sanitizer');


const path = require('path')
const public = path.join(__dirname,'public')


const app = express();
mongoose.connect('mongodb://localhost:27017/property', {useNewUrlParser: true});


app.use(morgan('dev'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressSanitizer())
app.set("view engine", "ejs");
app.use(methodOverRide("_method"));


 app.use(session({
	secret: "this is the authentication string",
	resave: true,
	saveUninitialized : false,
	
}))
//app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
 




app.use((req,res,next)=> {
	res.locals.currentUser = req.user;
		res.locals.error = req.flash('error');
		res.locals.success = req.flash("success");
		next();

})


app.use('/buyer',buyers)









app.listen(8080,(err)=> {
	if(err) {
		throw err
	}
	console.log('successful server')
})
