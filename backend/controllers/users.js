const User= require("../models/users");


const createUSer= async(req,res,next) => {

    console.log(req.body);

    const user= await User.create(req.body);
    
    //mail

    //otp
    res.status(201).json({
        success:true,
        message:"User Created"

    })
}

const login =async (req,res,next)=>{
    console.log(req.body,"here ");
    let  user;
    if(req.body.email)
      { 

         user = await User.find({email:req.body.email});
         if(user){
            console.log(user,"here 28")
            if(user[0].password === req.body.password){
                res.status(200).json({
                    success:true,
                    message:"logged in",
                    user,
                })
            }else{
                res.send({
                    success:false,
                    message:" Please Provide proper email or password "
                })
            }

         }
        }
    else{
        res.send({
            success:false,
            message:" Please Provide proper email or password here  "
        })
    }
    
    


}

module.exports = {
    login,
    createUSer
}
