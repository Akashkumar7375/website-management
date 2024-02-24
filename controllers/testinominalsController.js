const testTable=require('../models/testinominals')



exports.testform=(req,res)=>{
    res.render('testinominalsform.ejs')
}
exports.testnimo=(req,res)=>{
  const filename=req.file.filename
    const loginname=req.session.loginname
    const{Ttitle,Tdesc}=req.body
    const newdata=new testTable({title:Ttitle,desc:Tdesc,img:filename})
    newdata.save()

  res.render('testinomessage.ejs')
}

exports.admintestinom=async(req,res)=>{
    const loginname=req.session.loginname
    //   const data= await testTable.find()
      const ttest=await testTable.find().count()
      const Ptest=await testTable.find({status:'Published'}).count()
      const Utest=await testTable.find({status:'Unpublished'}).count()
      if(req.query.search){
        var data= await testTable.find({status:req.query.search})
      }
      else{
           var data=await testTable.find().sort({postedDate:-1})
      }

    res.render('admin/testinom.ejs',{loginname,data,ttest,Ptest,Utest,})
}

exports.TestinomUpadate=async(req,res)=>{
    const id =req.params.id
   const message = req.params.mssg
   const status = req.params.status
     let newStatus=null
   if(status =='Unpublished'){
    newStatus='Published'
   }else{
    newStatus='Unpublished'
   }
    
    await testTable.findByIdAndUpdate(id,{status:newStatus})
    res.redirect('/admin/testinom/Successfuly Status has been Update')
}
