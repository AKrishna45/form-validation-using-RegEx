var loginForm = document.getElementById('login-form');
var userName = document.getElementById('username');
var userNameErr = document.getElementById('username-err');
var userNameNoErr=document.getElementById('username-NoErr');

var password=document.getElementById('password');
var passwordErr=document.getElementById('password-err');
var passwordNoErr=document.getElementById('password-NoErr');

userName.addEventListener('input', function (e) {

    var regex = /^[\w]{8}$/;
    var Value = e.target.value;

    var isvalid = regex.test(currentValue);

    if (isvalid) {
        userNameErr.style.display = 'none';
        userNameNoErr.style.display='block';
    }
    else {
        userNameErr.style.display = 'block';
        userNameNoErr.style.display='none';
    }

});

password.addEventListener('input', function (e) {
    
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8}$/;
    var value = e.target.value;

   var isValid = regex.test(currentValue);

    if (isValid) {
        passwordErr.style.display = 'none';
        passwordNoErr.style.display = 'block';
    }
    else{
        passwordErr.style.display = 'block';
        passwordNoErr.style.display = 'none';
    }
});