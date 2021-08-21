const fnum = document.querySelector('#fnum');
const opt = document.querySelector('#opt');
const lnum = document.querySelector('#lnum');

const button = document.querySelector('#button');

const text = document.querySelector("h2")

const calcfunc = (e) =>{
  e.preventDefault();
  if(opt.value == "+"){
    text.innerHTML = `Result: ${parseInt(fnum.value) + parseInt(lnum.value)}`
  }else if(opt.value == "-"){
   text.innerHTML = `Result:  ${parseInt(fnum.value)- parseInt(lnum.value)}`}else if(opt.value == "*"){
    text.innerHTML = `Result:  ${parseInt(fnum.value) * parseInt(lnum.value)}`
  }else if(opt.value == "/"){
    text.innerHTML = `Result: ${parseInt(fnum.value) / parseInt(lnum.value)}`
  }
}


button.addEventListener('click', calcfunc)