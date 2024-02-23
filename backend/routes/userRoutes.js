
const user= require("../controllers/users");
const express= require("express");
const router=express.Router();


router.route('/login').post(user.login);
router.route('/register').post(user.createUSer);

module.exports=router;