var loginForm = document.getElementById('login-form');
var userName = document.getElementById('username');
var userNameErr = document.getElementById('username-err');
var userNameNoErr=document.getElementById('username-NoErr');

var password=document.getElementById('password');
var passwordErr=document.getElementById('password-err');
var passwordNoErr=document.getElementById('password-NoErr');

userName.addEventListener('input', function (e) {

    var regex = /^[\w]{8}$/;
    var currentValue = e.target.value;

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

   var isValid = regex.test(value);

    if (isValid) {
        errorElement.style.display = 'none';
        successElement.style.display = 'block';
    }
    else{
        errorElement.style.display = 'block';
        successElement.style.display = 'none';
    }
});