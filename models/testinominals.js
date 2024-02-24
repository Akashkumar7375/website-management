const mongoose=require('mongoose')


const testShema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },

    postedDate:{
      type:Date,
      required:true,
      default:Date.now,
    },

    status:{
        type:String,
        required:true,
        default:'Unpublished'
    }
})


module.exports=mongoose.model('testinominal',testShema)




