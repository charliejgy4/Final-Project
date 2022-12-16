const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connection = require ('./db')
const userRoutes = require("./routes/users");
const authRoutes =require ("./routes/auth");

const app = express();
//use express.json() to get data into json format
app.use(express.json());


//database connection
//connection();
//Port 
const PORT = process.env.PORT || 3000;

//use cors
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/auth",authRoutes);

// //import routes
const TodoItemRoute = require('./routes/todoItems');


//mongodb ..
mongoose.connect(process.env.DB_CONNECT='mongodb+srv://todo:1qaz2wsx@todo.ugrnqwr.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))



app.use('/', TodoItemRoute);



//server
app.listen(PORT, ()=> console.log("Server connected") );


 //login section starts here
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
//  }
  
// const express = require('express')
// const app = express()


// const bcrypt = require('bcrypt')
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')
  
//   const initializePassport = require('./passport-config')
//   initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
//   )
  
//  const users = []
  
// app.set('view-engine', 'ejs')
//  app.use(express.urlencoded({ extended: false }))
// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
//   }))
// app.use(passport.initialize())
// app.use(passport.session())
//  app.use(methodOverride('_method'))
  
//   app.get('/', checkAuthenticated, (req, res) => {
//     res.render('index.ejs', { name: req.user.name })
//   })
  
//   app.get('/login', checkNotAuthenticated, (req, res) => {
//     res.render('login.ejs')
//   })
  
//   app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   }))
  
//   app.get('/register', checkNotAuthenticated, (req, res) => {
//     res.render('register.ejs')
//   })
  
//   app.post('/register', checkNotAuthenticated, async (req, res) => {
//     try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10)
//       users.push({
//         id: Date.now().toString(),
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword
//       })
//       res.redirect('/login')
//     } catch {
//       res.redirect('/register')
//     }
//   })
  
//   app.delete('/logout', (req, res) => {
//     req.logOut()
//     res.redirect('/login')
//   })
  
//   function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next()
//     }
  
//     res.redirect('/login')
//   }
  
//   function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return res.redirect('/')
//     }
//     next()
//   }
  
//   app.listen(3000)

//app.listen(PORT, ()=> console.log("Server connected") );