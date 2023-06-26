const express = require('express')
const router = express.Router()
const bcryptjs = require("bcryptjs");
const AuthDB = require('../../models/user');
const jwt = require("jsonwebtoken");


router.post('/', async (req, res) => {
    const { email, password } = req.body
    const UserFound = await AuthDB.findOne({email: email})
    if(!UserFound){
        res.json({success: false, message: "User name found with this mail Id"})
    }
    else{
        const paswdcompare = await bcryptjs.compare(password, UserFound.password)
        if (!paswdcompare) {
          return res.status(400).json({ success: false, message: "Login with correct credentials" })
        }
        data = {
            user: {
              id: UserFound._id,
              name: UserFound.Username,
              email: UserFound.email,
      
            }
        }
        const authtoken = jwt.sign(data, "1234")
        res.json({success: true, message: "Logged in successfully", Token: authtoken})
    }
})

module.exports = router