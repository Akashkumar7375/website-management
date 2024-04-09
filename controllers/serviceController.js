const serviceTable=require('../models/service')


exports.services=async(req,res)=>{
    // console.log(req.query)
    const loginname=req.session.loginname
    const message=req.params.mssg
    if(message=='asc'){
        var data=await serviceTable.find().sort({postDate:1})
    }
    else if(message=='desc'){
        var data=await serviceTable.find().sort({postDate:-1})
    }
    else if(req.query.search){
        var data=await serviceTable.find({status:req.query.search})
    }
    else{
        var data=await serviceTable.find().sort({postDate:-1})
    }
    
   const tservice=await serviceTable.find().count()
   const tpublished=await serviceTable.find({status:'Published'}).count()
   const tunpublished=await serviceTable.find({status:'Unpublished'}).count()
    res.render('admin/service.ejs',{loginname,data,message,tservice,tpublished,tunpublished})
}
exports.servicesform=(req,res)=>{
    const loginname=req.session.loginname
    res.render('admin/serviceform.ejs',{loginname})
}

exports.servicesadd=(req,res)=>{
   const filename= req.file.filename
    const{Stitle,Sdesc,Smdetails}=req.body
     const sdata= new serviceTable({title:Stitle,desc:Sdesc,moreDetails:Smdetails, img:filename})
     sdata.save()
     res.redirect('/admin/service/Successfuly Service has been Added')
 
 }
 exports.servicesdetails=async(req,res)=>{
    const id=req.params.id
    const servicedetailsdata=await serviceTable.findById(id)
    res.render('servicedetails.ejs',{servicedetailsdata})
 }

 exports.servicesupdate=async(req,res)=>{
    const id=req.params.id
    const status=req.params.status
    let newStatus=null
if(status=='Unpublished'){
  newStatus='Published'
}else{
 newStatus='Unpublished'
}   
await serviceTable.findByIdAndUpdate(id,{status:newStatus})

res.redirect('/admin/service/Successfuly Status has been Update')

}