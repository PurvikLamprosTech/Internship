// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connection Successful");
// }).catch((err) => {
//     console.log("No Connection",err);
// });

// const userSchema = new mongoose.Schema({
//   fullname: String,
// //   username: String,
//   email: String,
//   phonenumber: String,
//   pass: String,
//   confirmpass: String,
// });

// const taskSchema = new mongoose.Schema({
//   title: String,
//   des: String,
//   dt: Date,
//   completed: Boolean,
// });

// const User = mongoose.model('User', userSchema);
// const Task = mongoose.model('Task', taskSchema);

// app.get('/todo', (req, res) => {
//   res.render('todo.ejs');
// });

// app.get('/', (req, res) => {
//   res.render('login.ejs');
// });

// app.get('/register', (req, res) => {
//   res.render('register.ejs');
// });

// app.post('/register', async (req, res) => {
//   const { fullname, username, email, phonenumber, pass, confirmpass } = req.body;
//   const salt = await bcrypt.genSalt(10);
//   const enpass = await bcrypt.hash(pass, salt);
//   const user = new User({ fullname, username, email, phonenumber, pass: enpass, confirmpass });
//   user.save((err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//     res.redirect('/');
//   });
// });

// app.post('/login-check', (req, res) => {
//   const { email, pass } = req.body;
//   if (email && pass) {
//     // Check if email exists in database
//     User.findOne({ email }, (err, user) => {
//       if (err) throw err;
//       if (user) {
//         // Compare password with hashed password stored in database
//         bcrypt.compare(pass, user.pass, (err, result) => {
//           if (err) throw err;
//           if (result === true) {
//             res.redirect('/todo');
//           } else {
//             res.send('Incorrect email or password');
//           }
//         });
//       } else {
//         res.send('Incorrect email or password');
//       }
//     });
//   } else {
//     res.send('Please enter email and password');
//   }
// });

// app.post('/todo', (req, res) => {
//   const { title, des, dt, completed } = req.body;
//   const task = new Task({ title, des, dt, completed });
//   task.save((err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });


// // =============================================================================================



// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connection Successful");
// }).catch((err) => {
//     console.log("No Connection",err);
// });

// const userSchema = new mongoose.Schema({
//   fullname: {
//     type: String,
//     required: true,
//     minLength: 3
//   },
//   email: {
//     type: String,
//     required: true,
//     unique:[true, "Email is already present"],
//     validate(value){
//         if(!validator.isEmail(value)){
//             throw new Error('Invalid Email Id');
//         }
//     }
//   },
//   phonenumber: {
//     type: Number,
//     min: 10,
//     required: true,
//     unique: true
//   },
//   pass: String,
//   confirmpass: String,
// });

// const taskSchema = new mongoose.Schema({
//   title: String,
//   des: String,
//   dt: Date,
//   completed: Boolean,
// });

// const User = mongoose.model('User', userSchema);
// const Task = mongoose.model('Task', taskSchema);

// app.get('/todo', (req, res) => {
//   res.render('todo.ejs');
// });

// app.get('/', (req, res) => {
//   res.render('login.ejs');
// });

// app.get('/register', (req, res) => {
//   res.render('register.ejs');
// });

// app.post('/register', async (req, res) => {
//   const { fullname, email, phonenumber, pass, confirmpass } = req.body;
//   const salt = await bcrypt.genSalt(10);
//   const enpass = await bcrypt.hash(pass, salt);
//   const user = new User({ fullname, email, phonenumber, pass: enpass, confirmpass });
//   user.save((err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//     res.redirect('/');
//   });
// });

// app.post('/login-check', (req, res) => {
//   const { email, pass } = req.body;
//   if (email && pass) {
//     // Check if email exists in database
//     User.findOne({ email }, (err, user) => {
//       if (err) throw err;
//       if (user) {
//         // Compare password with hashed password stored in database
//         bcrypt.compare(pass, user.pass, (err, result) => {
//           if (err) throw err;
//           if (result === true) {
//             res.redirect('/todo');
//           } else {
//             res.send('Incorrect email or password');
//           }
//         });
//       } else {
//         res.send('Incorrect email or password');
//       }
//     });
//   } else {
//     res.send('Please enter email and password');
//   }
// });

// app.post('/todo', (req, res) => {
//   const { title, des, dt, completed } = req.body;
//   const task = new Task({ title, des, dt, completed });
//   task.save((err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });

// app.listen(7000, () => {
//   console.log('Server started on port 7000');
// });


// // // // // //======================================================================

// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connection Successful");
// }).catch((err) => {
//   console.log("No Connection", err);
// });


// const userSchema = new mongoose.Schema({
//   fullname: String,
//   email: String,
//   phonenumber: String,
//   pass: String,
//   confirmpass: String,
// });
// // const userSchema = new mongoose.Schema({
// //   fullname: {
// //     type: String,
// //     required: true,
// //     minLength: 3
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     unique:[true, "Email is already present"],
// //     validate(value){
// //         if(!validator.isEmail(value)){
// //             throw new Error('Invalid Email Id');
// //         }
// //     }
// //   },
// //   phonenumber: {
// //     type: Number,
// //     min: 10,
// //     required: true,
// //     unique: true
// //   },
// //   pass: String,
// //   confirmpass: String,
// // });

// const taskSchema = new mongoose.Schema({
//   title: String,
//   des: String,
//   dt: Date,
//   completed: Boolean,
// });

// const User = mongoose.model('User', userSchema);
// const Task = mongoose.model('Task', taskSchema);

// app.get('/todo', (req, res) => {
//   res.render('todo.ejs');
// });

// app.get('/', (req, res) => {
//   res.render('login.ejs');
// });

// app.get('/register', (req, res) => {
//     res.render('register.ejs');
// });
  
// app.post('/register', async (req, res) => {
//     const { fullname, email, phonenumber, pass, confirmpass } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const enpass = await bcrypt.hash(pass, salt);
//     const user = new User({ fullname, email, phonenumber, pass: enpass, confirmpass });
//     try {
//       const result = await user.save();
//       console.log(result);
//       res.redirect('/');
//     } catch (err) {
//       throw err;
//     }
//   });

// //   app.post('/register', async (req, res) => {
// //     const { fullname, email, phonenumber, pass, confirmpass } = req.body;
// //     const salt = await bcrypt.genSalt(10);
// //     const enpass = await bcrypt.hash(pass, salt);
// //     const user = new User({ fullname, email, phonenumber, pass: enpass, confirmpass });
// //     user.save((err, result) => {
// //       if (err) {
// //         throw err;
// //       }
// //       console.log(result);
// //       res.redirect('/');
// //     });
// //   });
  

// app.post('/login-check', async (req, res) => {
//   const { email, pass } = req.body;
//   if (email && pass) {
//     try {
//       const user = await User.findOne({ email });
//       if (user) {
//         const result = await bcrypt.compare(pass, user.pass);
//         if (result === true) {
//           res.redirect('/todo');
//         } else {
//           return res.status(500).send({ error: 'Incorrect email or password' });
//         }
//       } else {
//         res.send('incorrect email or password');
//       }
//     } catch (err) {
//       throw err;
//     }
//   } else {
//     res.send('Please enter email and password');
//   }
// });

// app.post('/todo', async (req, res) => {
//   const { title, des, dt, completed } = req.body;
//   const task = new Task({ title, des, dt, completed });
//   try {
//     const result = await task.save();
//     console.log(result);
//   } catch (err) {
//     throw err;
//   }
// });

// app.listen(7000, () => {
//   console.log('Server started on port 7000');
// });

