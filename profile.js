function sendMail(){
    var params ={
        name : document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    const serviceID ="service_kjwrjzo";
const templateID ="template_sey40kz";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your mail was sent successfully")
    }
)
.catch((err)=>console.log(err));
}