const mongoose=require('mongoose')


const serviceSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    moreDetails:{
        type:String,
        required:true
    },
    postDate:{
        type:Date,
        required:true,
        default:new Date()
    },
    status:{
        type:String,
        required:true,
        default:"Unpublished"
    }
})

module.exports=mongoose.model('service',serviceSchema)