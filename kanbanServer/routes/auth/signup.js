const express = require('express')
const router = express.Router()
const AuthDB = require('../../models/user');
const bcryptjs = require('bcryptjs')

router.post('/', async (req, res) => {
    const {Username, email, password} = req.body;
    const UserFound = await AuthDB.findOne({email: email})
    if(UserFound){
        res.json({success: false, message: "Email already exists"})
    }
    else{
        const salt = await bcryptjs.genSaltSync(10)
        const encryptpassword = await bcryptjs.hash(password, salt)
        await AuthDB.create({
            Username: Username,
            email: email,
            password: encryptpassword
        }).then(() => {
            res.json({success: true, message: "Successfully registered!"})
        })
    }
})

module.exports = router