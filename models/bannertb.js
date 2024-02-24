const mongoose=require('mongoose')


const bannerSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },
    desc:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    mdetails:{
         type:String,
         required:true
    },
    createDate:{
           type:Date,
           default:new Date()
    }
})


module.exports=mongoose.model('banner',bannerSchema)