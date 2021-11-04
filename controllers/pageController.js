const nodeMailer = require('nodemailer');

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getCoursePage = (req,res)=>{
  res.status(200).render('courses',{
    page_name:'courses'
  })
};
exports.getRegisterPage = (req,res)=>{
  res.status(200).render('register',{
    page_name:'register'
  });
}
exports.getLoginPage = (req,res)=>{
  res.status(200).render('login',{
    page_name:'login'
  })
}
exports.getContactPage = (req,res) =>{
  res.status(200).render('contact',{
    page_name:'contact'
  })
}
exports.sendEmail = async (req,res) =>{
    const outputMessage = `
      <h1>Mail Details</h1>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Messages</li>
        <p>${req.body.message}</p>
      </ul>
    `;
    let transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port:465,
      secure:true,
      auth:{
        
      }
    });
    let info = await transporter.sendMail({
      from: '"Smart EDU Contact Form" <ataberkturkoglug3@gmail.com>',
      to: "ataberkturkoglug3@gmail.com",
      html:outputMessage
    });
    res.status(200).redirect('contact');
}
