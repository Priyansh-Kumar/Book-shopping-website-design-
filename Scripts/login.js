
let submit=()=>{
  let email=document.querySelector('.email').value;
  let password=document.querySelector('.pass').value;
  let loginMessage=document.querySelector('.login');
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let errorEmail=document.querySelector('.error-email');
  let errorPass=document.querySelector('.error-pass');
  if(password.length==0){
    errorPass.innerHTML=`***Please enter your password`;
  }
  
  if(!(email.match(mailformat))){
    errorEmail.innerHTML=`**Enter a valid Email`;
  }
  else if(password.length==0){
    errorPass.innerHTML=`***Please enter your password`;
  }
  else{

  loginMessage.innerHTML=`You are Successfully Login`;
  }
}