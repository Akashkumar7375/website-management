const router=require('express').Router()
const upload=require('../middleware/multer')
const registerTable=require('../models/register')
const bannerC=require('../controllers/bannerController')
const registerCont=require('../controllers/registerController')
const bannertb = require('../models/bannertb')
const serviceController= require('../controllers/serviceController')
const serviceTable=require('../models/service')
const testTable=require('../models/testinominals')
const testinominalsController=require('../controllers/testinominalsController')
const queryController=require('../controllers/queryController')
const queryTable=require('../models/query')
 const validation=require('../middleware/queryvalidation')

router.get('/bannerdetails',bannerC.moredetails)
router.get('/servicedetails/:id',serviceController.servicesdetails)
router.get('/testinominalsform',testinominalsController.testform)
router.post('/testinominalsform',upload.single('img'),testinominalsController.testnimo)
router.post('/query',queryController.queryinsert)





module.exports=router