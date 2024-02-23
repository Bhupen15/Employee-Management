const mongoose=require('mongoose');


const managerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"Name doesnt exceed 30 characters"],
        minlength:[4,"Name shoul have more than 4 characters"]
    },
    email:{
        type:String,
        required:[true,"please enter email address"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid Email"]
    },
    password:{
        type:String,

    },
    role:
    {
        type:String,
        default:"manager"
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    
});

module.exports=mongoose.model("User",managerSchema);