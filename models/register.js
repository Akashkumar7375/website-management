const mongoose=require('mongoose')



let registerSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    createdDate:{
        type:Date,
        required:true,
        default:new Date()
    }
})

module.exports=mongoose.model('register',registerSchema)