var strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
var mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))|((?=.*[a-z])(?=.*[0-9])(?=.{8,}))|((?=.*[A-Z])(?=.*[0-9])(?=.{8,}))');
function Validator(){
    var email=document.forms["signup"]["email"].value;
    var email=document.forms["signup"]["email"].value;
    var num=document.forms["signup"]["num"].value;
    var pass=document.forms["signup"]["pass"].value;
    if (email==''){
        document.getElementById('em').style.border='1px solid red';
        document.getElementById('email').placeholder='لطفا ایمیل خود را وارد کنید';
        return (false);
    }
    if (num=='') {
        document.getElementById('numb').style.border='1px solid red';
        document.getElementById('num').placeholder='لطفا شماره تلفن همراه خود را وارد کنید';
        return (false);
    }
    if(pass==''){
        document.getElementById('passw').style.border='1px solid red';
        document.getElementById('pass').placeholder='لطفا رمز مورد نظر خود را وارد کنید';
        return (false);
    }
    if (!mediumPassword.test(pass)) {
        document.getElementById('psw').innerHTML='رمز عبور شما ضعیف می باشد !';
        return (false);
    } 
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
        {
        document.getElementById('psw').innerHTML="ایمیل شما صحیح نمی باشد !";
        return (false);
    }
    if (!(/^.{11}$/.test(num))) {
        document.getElementById('psw').innerHTML="شماره تلفن همراه شما صحیح نمی باشد !";
        return (false);
    }  
    return (true);
}

function Toggle(){
    if (pass.type === "password") {
      pass.type = "text";
      document.getElementById('tvalue').innerHTML=document.getElementById('tvalue').innerHTML="&#128585;"
    } else {
      pass.type = "password";
     document.getElementById('tvalue').innerHTML="&#128584;"  
    }
}
function Ok(state){
    if (state==1) {
        if (document.getElementById('email').value!="") {
            document.getElementById('em').style.border='1px solid rgb(184, 183, 183)';
        }
        else{
            document.getElementById('em').style.border='1px solid red';
        }
    }
    else{
        if (document.getElementById('num').value!="") {
            document.getElementById('numb').style.border='1px solid rgb(184, 183, 183)';
        }
        else{
            document.getElementById('numb').style.border='1px solid red';
        }
    }
}
function PswStrength(){
    var strong=strongPassword.test(document.forms["signup"]["pass"].value); 
    var medium=mediumPassword.test(document.forms["signup"]["pass"].value); 
    if (document.forms["signup"]["pass"].value!="") {
        document.getElementById('passw').style.border='1px solid rgb(184, 183, 183)';
        if (strong) {
            document.getElementById('pswprog').style.width='100%'
            document.getElementById('pswprog').style.backgroundColor='green' 
        }
        else if(medium) {
            document.getElementById('pswprog').style.width='50%'
            document.getElementById('pswprog').style.backgroundColor='yellow'
        }
        else{
            document.getElementById('pswprog').style.width='25%'
            document.getElementById('pswprog').style.backgroundColor='red'
        }
    }
    else{
        document.getElementById('pswprog').style.width='0%'
    }
}
