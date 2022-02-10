// submit button
document.getElementById('submit-btn').addEventListener('click',function(){
    // email 
    const emailConfirmation=document.getElementById('email-confirmation')
    const emailValue=emailConfirmation.value
    // password
    const passwordConfirmation=document.getElementById('password-confirmation')
    const passwordValue=passwordConfirmation.value
    if(emailValue=="zilaniabdul4@gmail.com" && passwordValue=="zilani121"){
        window.location.href = "banking.html";
    }
})
