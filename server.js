const express=require('express')
const server= express()
server.use(express.urlencoded({extended:false}))
const dotenv=require('dotenv').config()
const userRouter=require('./routers/userRouter')
const adminRouter=require('./routers/adminRouter')
const homeController=require('./routers/Home')
const mongoose=require('mongoose')
const session=require('express-session')
mongoose.connect('mongodb://127.0.0.1:27017/1130kproject')





server.use(session({
    secret:process.env.KEY,
    resave:false,
    saveUninitialized:false
}))
server.use(homeController)
server.use('/admin',adminRouter)
server.use('/user',userRouter)
server.use(express.static('public'))
server.set('view engine','ejs')
server.listen(8000,()=>{
   console.log('server is running on port 8000 ')
})