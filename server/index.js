const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 3000;

// //use cors
app.use(cors());

// //import routes
const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT='mongodb+srv://todo:1qaz2wsx@todo.ugrnqwr.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

// mongoose.connect("mongodb",{
//     userNewUrlParser:true,
//     useunifiedTopology:true
// })

// .then(() =>onslotchange.log("Databased Connected DB"))
// .catch (console.error);

app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );
