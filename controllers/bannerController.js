const bannerTable=require('../models/bannertb')




exports.banner=async(req,res)=>{
    const msg=req.params.mssg
    const loginname =req.session.loginname
    let data=await bannerTable.findOne()
    res.render('admin/banner.ejs',{data,loginname,msg})
}
exports.bannerform=async(req,res)=>{
    
    const id=req.params.id
    const loginname =req.session.loginname
   const data=await bannerTable.findById(id)
    res.render('admin/bannerform.ejs',{data,loginname})
}
exports.bannerUpdate=async(req,res)=>{
    const id=req.params.id
    const{btitle,bdesc,bmdetails}=req.body
    if(req.file){
     
        const filename=req.file.filename
        await bannerTable.findByIdAndUpdate(id,{title:btitle, desc:bdesc,mdetails:bmdetails,img:filename})
    }else{
    await bannerTable.findByIdAndUpdate(id,{title:btitle, desc:bdesc,mdetails:bmdetails})
   
    }
    res.redirect('/admin/banner/Successfully Update')
}


exports.moredetails=async(req,res)=>{
    const data=await bannerTable.findOne()
    res.render('bannerdetails.ejs',{data})
}
