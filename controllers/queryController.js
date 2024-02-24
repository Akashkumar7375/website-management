const queryTable=require('../models/query')
const nodemailer=require('nodemailer')


exports.queryinsert=(req,res)=>{

   
    const{Email,comment} =req.body
    const newquery=new queryTable({email:Email,query:comment})
    newquery.save()
 
    res.render('admin/message.ejs')

 }


 exports.adminquery=async(req,res)=>{
    const loginname=req.session.loginname
   const message= req.params.mssg
const data=await queryTable.find().sort({postDate:-1})
    res.render('admin/query.ejs',{loginname,data,message})

}
exports.emailform=async(req,res)=>{
    const id=req.params.id
    const loginname=req.session.loginname
    const data=await queryTable.findById(id)
    res.render('admin/emailform.ejs',{loginname,data})
}

exports.sendemail=async(req,res)=>{
    const id=req.params.id
    const{emailto,emailform,subject,body}=req.body

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "rohitkumawatt304@gmail.com",
          pass: "gtdlqqwmvnguzwus",
        },
      });
console.log('connected to smtp server')
      await transporter.sendMail({
        from: emailform, // sender address
        to:emailto, // list of receiversed to smtp server
        subject:subject, // Subject line
        text: body, // plain text body
        
      });

      await queryTable.findByIdAndUpdate(id,{status:'Replied'})
     res.redirect('/admin/query/Successfully email has been send')
}