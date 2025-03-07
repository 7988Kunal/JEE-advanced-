let title=document.querySelector('.title');
let use=document.querySelector('.use');
let signupbtn=document.querySelector('.signupbtn');
let signinbtn=document.querySelector('.disable');
let page=document.querySelector('.page');
let hide=document.getElementById('hide');
let down=document.getElementById('down');
let forget=document.querySelector('.forget');
let btn=document.getElementsByClassName('btn');

signinbtn.addEventListener('click',()=>{
  use.style.height='100px';
  title.innerHTML='Sign In';
  hide.style.visibility='hidden';
  signupbtn.classList.add('disable');
  forget.innerHTML='forget password? <a href="#">click here </a>';
  down.style.transform='translate(0,0px)'
  signinbtn.classList.remove('disable');
  signupbtn.transition="0s";
})
signupbtn.addEventListener('click',()=>{
  use.style.height='100px';
  title.innerHTML='Sign Up';
  hide.style.visibility='visible';
  signupbtn.classList.remove('disable');
  forget.innerHTML='password suggestion? <a href="#">click here </a>';
  signinbtn.classList.add('disable');
  down.style.transform='translate(0,0)'
  signinbtn.transition="0s";
})