const User = require('../model/buyer');
const bcrypt = require('bcrypt');
const passport = require('passport')

const landing = (req,res)=> {
	res.render('landing')
}

const register = (req, res)=> {
	res.render('user/register',{message: req.flash('signup message')})

}

const signing = (req,res)=> {
	res.render('user/login',{message: req.flash('login message')})
}

const profile = (req,res)=> {
	res.render('profile',{
		user : req.user
	})
}

// const Signup = (req,res) => {
	
// 	bcrypt.hash(req.body.password, 10) .then(
		

// 			(hash)=> {
				
// 				const user =new User ({
// 					username: req.body.username,
// 					email: req.body.email,
// 					phone_number:req.body.phone_number,
// 					password: hash
// 				});

// 				user.save().then(
// 						() => {
// 							res.render('home')
							
// 						}
// 					).catch(
// 						(error) => {
// 							req.flash('error',"user with that email exists")
// 							console.log(req.flash)
// 							res.status(500).json({
// 								error: error.errmsg
// 							})
// 						}
// 					)
// 			}
// 		)

// }

// const login = (req,res) => {
// 	User.findOne({email: req.body.email}).then(
// 		(user) => {
// 			if(!user) {
// 				return res.status(401).json({
// 					error: new Error ("user not found")
// 				});
// 			}
// 			bcrypt.compare(req.body.password, user.password).then(
// 				(valid) => {
// 					if(!valid) {
// 						return res.status(401).json({
// 							error : new Error("incorrect password")
// 						});
// 					}

// 					const token = jwt.sign({userId:user._id},'Random user authentication',{expiresIn:'24h'})
// 					res.status(200).json({
// 						userId: user._id,
// 						token: 'token'
// 					})
// 				}
				
			
// 				).catch(
// 					(error) => {
// 						console.log(error)
// 						// res.status(500).json({
// 						// 	error : error
// 						// })
// 						throw error
// 					}
// 				)
// 		}
// 		).catch(
// 			(error)=> {
// 				console.log(error)
// 				//res.status(500).send(error + "error here")
// 				throw error
// 			}
// 		)
// }

const login = (req,res) => {
	 passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' })
}
const logout = (req,res)=> {
	req.logout();
	res.redirect('/')
}

const isLoggedIn = (req,res,next)=> {
	if(req.isAuthenticated())
		next();
	res.redirect('/')
}

module.exports = {login,landing,register,signing,logout,isLoggedIn,profile}