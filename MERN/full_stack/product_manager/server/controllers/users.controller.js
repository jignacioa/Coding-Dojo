//need to import bcrypt - hashed pw check in db
const bcrypt = require('bcrypt')
const User = require('../models/User.model');
const jwt = require('jsonwebtoken')


module.exports = {
    register(req, res) {
        User.create(req.body)
        .then(newUser => res.json({
            status: 'Success',
            id: newUser._id
        }))
        .catch(error => res.status(400).json(error))
    },
//async to be able to use await 
    async login(req, res) {
        const{email, password} = req.body  

             //find user by email
            const user = await User.findOne({email}); 
            console.log(user) //async and await allows code as if it was synchronous - should log a user, if not it'd be a pending promise
            
            if (user === null) {
              return res.sendStatus(400);//creates new object of the error class gets caught in catch if thrown
            }

            //password from submission and user.password from db
            const result = await bcrypt.compare(password, user.password)  // if not a match, thrown into catch 

            if(result === false) {
                return res.sendStatus(400);
            }

            const token = jwt.sign({
                id: user._id,
                email: user.email
            }, process.env.SECRET_KEY)
            //console.log(token) //3 parts - all token data is encoded - has to be decoded 

            // if we get past both awaits
            res.cookie('token', token, {
              httpOnly: true //don't want js code to have access to cookie value - don't trust client 
            })
            res.json({status: 'Success', token}); //token doesn't have to be here. token is only available in server side 
      
      //store user info 

    },
    logout(_req, res) {
        res.clearCookie('token') //pass name of cookie you want to clear 
        res.json({status: 'Success'})
    }
}