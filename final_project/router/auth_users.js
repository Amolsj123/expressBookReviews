const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ 
  
                // If password not entered
                if (username == Amol)
                    return true;
                      
                // If Not same return False.    
                else if (username!= Amol) {
                    return false;
                }
}

const authenticatedUser = (username,password)=>{ 
  // If password not entered
  if (username== Amol){
    if (password== password){
      return true;
    }
    else{
      return false;
    }       
  }
  return false;
}


//only registered users can login
regd_users.post("/login", (req,res) => {
 
    const username = req.body.username;
    const password = req.body.password;
  
  
    if (username && password) {
      if (!doesExist(username)) { 
        users.push({"username":username,"password":password});
        return res.status(200).json({message: "User successfully registred. Now you can login"});
      } else {
        return res.status(404).json({message: "User already exists!"});
      }
    } 
    return res.status(404).json({message: "Unable to register user."});
  });
  
// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  try {
    const response = await axios.get(`bookssdb=${isbn}`);
    return response.data;
  } catch (error) {
    throw error;
  }

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;

