const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
    },
    email:{
        type:String,
        required:[true,"please enter email address"],
    
    },
    password:{
        type:String,
        required:[true,"please enter password"],
        minlength:[8,"Password must have atleast 8 characters"],

    },
    role:
    {
        type:String,
        default:"user"
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    
});

module.exports=mongoose.model("user",userSchema);