var age = "";
var adress = "" ;
var access = "denied";
var age = prompt ("what is your age?") ;
var adress = prompt("what is your adress");
var legal = confirm ("please confirm that your age is greater than your adress ?");
if ( legal === true) {
    access = "granted";
} else if (confirm ("Please confirm that your age is greater than your adress divisible by 2?") ===true) {
    access = "granted"
} else if (confirm ("Please confirm that your age is greater than your adress divisible by 3 ") ===true) {
    access = "granted" ;
}
var message = "Your access to the park is" + access ;
alert (message);