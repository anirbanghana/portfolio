let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector(".navbar")
menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle("move")
}
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove("move")
}

//Email Js

// function validate()
// {
//     let name = document.querySelector(".name");
//     let email = document.querySelector(".email");
//     let msg = document.querySelector(".message");
//     let sendBtn = document.querySelector(".send-btn");

//     sendBtn.addEventListener("click",(e) => {
//         e.preventDefault();
//         if(name.value == "" || email.value == "" || msg.value == ""){
//             emptyerror();
//         }else{
//             sendmail(name.value,email.value,msg.value);
//             success();
//         }
//     });

// }
// validate();

// function sendmail(name,email,msg){
//     emailjs.send("service_ownb1ir","template_1vbffpt",{
//         to_name: name,
//         from_name: email,
//         message: msg,
//         });
// }

// function emptyerror(){
//     swa1({
//         title:"Oh No...",
//         text:"Fields cannot be empty!",
//         icon:"error",
//     });
// }
// function success(){
//     swa1({
//         title:"Email send successfully",
//         text:"We will try to reply you in 24 hrs",
//         icon:"success",
//     });
// }

function sendmail(){
    var params = {
        from_name:document.getElementById("fullname").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_ownb1ir","template_1vbffpt",params).then(function(res){
        alert("Success!" + res.status);
    })
}

//header backgroud change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll',()=>{
    header.classList.toggle('header-active',window.scrollY > 0);
});

//scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll',()=>{
    scrollTop.classList.toggle('scroll-active',window.scrollY > 0);
});