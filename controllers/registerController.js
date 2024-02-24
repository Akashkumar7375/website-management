const registerTable=require('../models/register')


let mssg=''
let color=''




exports.loginform=async(req,res)=>{
    res.render('admin/login.ejs',{mssg,color})
}


exports.login=async(req,res)=>{

 
const{us,pass}=req.body
 const usercheak= await registerTable.findOne({username:us})
if(usercheak!=null){
    if(usercheak.password==pass){

        req.session.isAuth=true
        req.session.loginname=us

        console.log(req.session)
        res.redirect('/admin/dashboord')
    }else{
        mssg='Passwod is not valid'
        color='danger'
        res.render('admin/login.ejs',{mssg,color})

    }
    
}else{
    mssg='UserName is not valid'
    color='danger'
    res.render('admin/login.ejs',{mssg,color})

}

}

exports.dashboord=(req,res)=>{
    const loginname=req.session.loginname
    res.render('admin/dashboord.ejs',{loginname})
}
exports.logout=(req,res)=>{
    req.session.destroy()
    res.redirect('/admin/')
}


