const router=require('express').Router()
const upload=require('../middleware/multer')
 const registerTable=require('../models/register')
 const bannerTable = require('../models/bannertb')
 const registerCont=require('../controllers/registerController')
 const bannerCont=require('../controllers/bannerController')
 const sessioncheck=require('../middleware/session')
const serviceController= require('../controllers/serviceController')
const serviceTable=require('../models/service')
const testTable=require('../models/testinominals')
const testinominalsController=require('../controllers/testinominalsController')
const queryController=require('../controllers/queryController')
const queryTable=require('../models/query')



router.get('/',registerCont.loginform)
router.post('/',registerCont.login)
router.get('/dashboord',sessioncheck,registerCont.dashboord)
router.get('/logout',registerCont.logout)
router.get('/banner/:mssg',sessioncheck,bannerCont.banner)
router.get('/bannerform/:id',sessioncheck,bannerCont.bannerform)
router.post('/bannerform/:id',upload.single('img'),sessioncheck,bannerCont.bannerUpdate)
router.get('/service/:mssg',sessioncheck,serviceController.services)
router.get('/serviceform',sessioncheck,serviceController.servicesform)
router.post('/serviceform',upload.single('img'),sessioncheck,serviceController.servicesadd)
router.get('/serviceUpdate/:id/:status',sessioncheck,serviceController.servicesupdate)
router.get('/testinom/:mssg',sessioncheck,testinominalsController.admintestinom)
router.get('/testinomUpadate/:id/:status',sessioncheck,testinominalsController.TestinomUpadate)

router.get('/query/:mssg',sessioncheck,queryController.adminquery)
router.get('/emailform/:id',sessioncheck,queryController.emailform)
router.post('/emailform/:id',sessioncheck,queryController.sendemail)





module.exports=router