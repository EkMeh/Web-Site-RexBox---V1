var firstname=document.getElementById('firstname');
var lastname=document.getElementById('lastname');
var email=document.getElementById('email');
var password=document.getElementById('password');
var trems1=document.getElementById('trems1');
var trems2=document.getElementById('trems2');
var btn=document.getElementById('btn');
var mesError1=document.getElementById('mesError1');
var mesError2=document.getElementById('mesError2');
var mesError3=document.getElementById('mesError3');
var mesError4=document.getElementById('mesError4');
var i1=document.getElementById('i1');
var i2=document.getElementById('i2');
var i3=document.getElementById('i3');
var i4=document.getElementById('i4');
var i5=document.getElementById('i5');
var i6=document.getElementById('i6');
var i7=document.getElementById('i7');
var i8=document.getElementById('i8');
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');

// Create Account Function Start

btn.addEventListener('click',function(event){
    // 1 //
    if(firstname.value==='')
    {
        mesError1.innerHTML="*Firstname cannot be blank";
        mesError1.style.visibility='visible';
        firstname.style.border='4px solid #E74C3C';
        i1.style.visibility='hidden';
        i5.style.visibility='visible';
    }else{
        firstname.style.border='4px solid #27AE60';
        i1.style.visibility='visible';
        i5.style.visibility='hidden';
        mesError1.style.visibility='hidden';
    }
    // 2 //
    if(lastname.value==='')
    {
        mesError2.innerHTML="*Lastname cannot be blank";
        mesError2.style.visibility='visible';
        lastname.style.border='4px solid #E74C3C';
        i2.style.visibility='hidden';
        i6.style.visibility='visible';
    }else{
        lastname.style.border='4px solid #27AE60';
        i2.style.visibility='visible';
        i6.style.visibility='hidden';
        mesError2.style.visibility='hidden';
    }
    // 3 //
    if(email.value==='')
    {
        mesError3.innerHTML="*Email cannot be blank";
        mesError3.style.visibility='visible';
        email.style.border='4px solid #E74C3C';
        i3.style.visibility='hidden';
        i7.style.visibility='visible';
    }else{
        email.style.border='4px solid #27AE60';
        i3.style.visibility='visible';
        i7.style.visibility='hidden';
        mesError3.style.visibility='hidden';
    }
    // 4 //
    if(password.value==='')
    {
        mesError4.innerHTML="*Password cannot be blank";
        mesError4.style.visibility='visible';
        password.style.border='4px solid #E74C3C';
        i4.style.visibility='hidden';
        i8.style.visibility='visible';
    }else{
        password.style.border='4px solid #27AE60';
        i4.style.visibility='visible';
        i8.style.visibility='hidden';
        mesError4.style.visibility='hidden';
    }
    // 5 //
    if(trems1.checked==false)
    {
        p1.style.color='red';
    }else{
        p1.style.color='white';
    }
    // 6 //
    if(trems2.checked==false)
    {
        p2.style.color='red';
    }else{
        p2.style.color='white';
    }

    if(firstname.value!=='' && lastname.value!=='' && email.value!=='' && password.value!=='' && trems1.checked==true && trems2.checked==true)
    {
        alert(firstname.value + " "+lastname.value+" "+"Account Created !!!");
        location.reload();
    }
});

// Create Account Function End

    
