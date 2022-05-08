const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.post('/login',(req,res)=>{
  const user = req.body;
  console.log(user);
  // DANGER: Do not check password here for serious application
  // USE proper process for hashing and checking
  // After completing all authentication related verification, issue JWT token
  res.send({ success: true });
  if(user.password === '123456'){
      
  }
})

app.get('/',(req, res) =>{
    res.send('hello booss')
});

app.listen(port, () => {
    console.log('Listening to port');
})


