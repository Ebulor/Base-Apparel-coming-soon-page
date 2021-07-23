const error_icon = document.querySelector(".error-icon");
const error_msg = document.querySelector(".error-msg");
const input = document.querySelector("form input");
const form = document.querySelector(".form");
const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



form.addEventListener("submit", (e)=>{
    if(!emailExpression.test(input.value)){        
        error_icon.classList.add("error");
        error_msg.classList.add("error");
        input.classList.add("error");
        e.preventDefault();
    }
    else{
        
        e.currentTarget.submit();
    }
})
        