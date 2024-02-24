const mongoose= require('mongoose')


const queryShema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true
    },
    postDate:{
        type:Date,
        required:true,
        default:new Date
    },
    status:{
       type:String,
       required:true,
       default:'Reply'
    }
})
module.exports=mongoose.model('query',queryShema)