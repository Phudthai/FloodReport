const express = require('express');
const router = express.Router();

//mongodb user model
const User = require('./../models/User');

//Password handLer
const bcrypt = require('bcrypt');

//Signup
router.post('/signup', (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth();

    if (name == "" || email == "" || password == "" || dateOfBirth) {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });    
    } else if (!/^[a-zA-Z]*$/.test(name)) {
        res.json({
            status: "FALIED",
            message: "Invalid name entered"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2-4}$/.test(email)) {
        res.json({
            status: "FALIED",
            message: "Invalid email entered"
        })
    } else if (new Date(dateOfBirth).getTime()){
        res.json({
            status: "FALIED",
            message: "Invalid date of birth entered"
        })
    } else if (password.length <8) {
        res.json({
            status: "FALIED",
            message: "Password is too short!"
        })
    } else {
        // Checking if user already exists
        User.find({email}).then(result => {
            if (result.length) {
                //A user already exists
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                })  
            } else {
                // Try to create new user

                //password handLing
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User ({
                        name,
                        email,
                        password: hashedPassword,
                        dateOfBirth
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful",
                            date: result,
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while saving user account!"
                        })
                    })
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while hashing password!"
                    })
                })
            }

        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occurred while checking for existing user!"
            })
        })
    }
})


//Signin
router.post('signin', (req, res) => {

})

module.exports = router;