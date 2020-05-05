const express = require('express');
const buyers  = require('../controller/buyer');
const isLoggedIn = require('../controller/buyer')
const passport = require('passport');
const buyerRoute = express.Router();

//login / signup routes
// buyerRoute.post('/register', passport.authenticate('local-signup',{
// 	successRedirect: '/buyer/profile',
// 	failureRedirect: '/buyer/register',
// 	failureFlash : true //allow flash messages
// }));
//buyerRoute.post('/login', buyers.login);


//landing / login pages

buyerRoute.get('/',buyers.landing)
buyerRoute.get('/register', buyers.register)
buyerRoute.get('/signin', buyers.signing)
buyerRoute.get('/logout',buyers.logout)
buyerRoute.get('/profile',buyers.profile)



module.exports = buyerRoute

