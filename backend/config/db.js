const express = require("express");
const mongoose = require("mongoose");


const connectDataBase=( )=>{
    mongoose.connect('mongodb+srv://bhupendra:Avs9piAWWSJStGFy@cluster0.tgxp6st.mongodb.net/').then(()=>{
        console.log('connection successful');
    }).catch((err)=>{
        console.log(err);
    });
    }

module.exports=connectDataBase;
