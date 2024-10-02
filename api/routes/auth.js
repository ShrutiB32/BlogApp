const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//Register
router.post("/register", async(req, res) => {
    try {
        
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        console.log("hasedPass.....",hashedPass)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        console.log(newUser)
        const user = await newUser.save();
        console.log("user..........",user)
        res.status(200).json(user);
    }
    catch(err) {
        res.status(500).json(err)
    }
})


//Login

router.post("/login", async(req,res) => {
    try{
        const user = await User.findOne({
            username: req.body.username
        })
        console.log("...user",user.password)
        !user && res.status(400).json("Wrong credentials!");
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials");

        const { password, ...others} = user._doc;
        console.log("request...",req.body);
        console.log("others..",others)
        res.status(200).json(others)
    } catch(error) {
        res.status(500).json(error)
    }
})
module.exports = router