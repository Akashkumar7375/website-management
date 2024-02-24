const router=require('express').Router()
const bannerTable=require('../models/bannertb')
const serviceController= require('../controllers/serviceController')
const serviceTable=require('../models/service')
const testTable= require('../models/testinominals')
 
 router.get('/',async(req,res)=>{
  const bannerData= await bannerTable.findOne()
  const serviceData= await serviceTable.find({status:'Published'})
  const testinom= await testTable.find({status:'Published'})
    res.render('index.ejs',{bannerData,serviceData,testinom})
 })




module.exports=router