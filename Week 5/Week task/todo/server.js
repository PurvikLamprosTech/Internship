const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connection Successful");
}).catch((err) => {
  console.log("No Connection", err);
});


const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phonenumber: String,
  pass: String,
  confirmpass: String,
});
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

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
  });

// const taskSchema = new mongoose.Schema({
//   title: String,
//   dt: Date,
//   completed: Boolean,
// });

//collections
const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);

// app.get('/todo', (req, res) => {
//   res.render('todo.ejs');
// });

app.get('/todo', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.render('todo', { tasks: tasks });
    } catch (err) {
      console.log(err);
    }
  });  
  

app.get('/todoLogIn', (req, res) => {
  res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});
  
app.post('/register', async (req, res) => {
    const { fullname, email, phonenumber, pass, confirmpass } = req.body;
    const salt = await bcrypt.genSalt(10);
    const enpass = await bcrypt.hash(pass, salt);
    const user = new User({ fullname, email, phonenumber, pass: enpass, confirmpass });
    try {
      const result = await user.save();
      console.log(result);
      res.redirect('/todoLogIn');
    } catch (err) {
      throw err;
    }
  });

//   app.post('/register', async (req, res) => {
//     const { fullname, email, phonenumber, pass, confirmpass } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const enpass = await bcrypt.hash(pass, salt);
//     const user = new User({ fullname, email, phonenumber, pass: enpass, confirmpass });
//     user.save((err, result) => {
//       if (err) {
//         throw err;
//       }
//       console.log(result);
//       res.redirect('/');
//     });
//   });
  

app.post('/login-check', async (req, res) => {
  const { email, pass } = req.body;
  if (email && pass) {
    try {
      const user = await User.findOne({ email });
      if (user) {
        const result = await bcrypt.compare(pass, user.pass);
        if (result === true) {
          res.redirect('/todo');
        } else {
          return res.status(500).send({ error: 'Incorrect email or password' });
        }
      } else {
        res.send('incorrect email or password');
      }
    } catch (err) {
      throw err;
    }
  } else {
    res.send('Please enter email and password');
  }
});

app.post('/todo', async (req, res) => {
  const { title, date, completed } = req.body;
  const task = new Task({ title, date, completed });
  try {
    const result = await task.save();
    console.log(result);
  } catch (err) {
    throw err;
  }
});


// // 

// Create a new task
app.post('/tasks', async (req, res) => {
    try {
      const task = new Task({
        title: req.body.title,
        completed: req.body.completed,
      });
  
      await task.save();
  
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
// Get all tasks
app.get('/', async (req, res) => {
    try {
      const tasks = await Task.find().sort({ date: -1 });
  
      res.render('todo', { tasks });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
// Get a single task by ID
app.get('/tasks/:id', async (req, res) => {
    try {
      // Get the task ID from the request parameters
      const id = req.params.id;
  
      // Find the task by ID in the database
      const task = await Task.findById(id);
  
      // Render the task details template with the task data
      res.render('tasks', { task });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
// Update a task
app.put('/tasks/:id', async (req, res) => {
    try {
      // Get the task ID from the request parameters
      const id = req.params.id;
  
      // Find the task by ID in the database
      const task = await Task.findById(id);
  
      // Update the task properties
      task.title = req.body.title;
      task.completed = req.body.completed;
  
      // Save the updated task to the database
      await task.save();
  
      // Redirect to the task details page
      res.redirect(`/tasks/${id}`);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
// Delete a task
app.delete('/tasks/:id', async (req, res) => {
    try {
      // Get the task ID from the request parameters
      const id = req.params.id;
  
      // Remove the task from the database
      await Task.findByIdAndRemove(id);
  
      // Redirect to the home page
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
 // Mark a task as completed
app.post('/tasks/:id/complete', async (req, res) => {
    try {
      // Get the task ID from the request parameters
      const id = req.params.id;
  
      // Find the task by ID in the database
      const task = await Task.findById(id);
  
      // Update the completed property
      task.completed = true;
  
      // Save the updated task to the database
      await task.save();
  
      // Redirect to the home page
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

// Get all tasks, sorted by date in descending order
app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find().sort({ date: -1 });
  
      res.json(tasks);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

app.listen(7000, () => {
  console.log('Server started on port 7000');
});
