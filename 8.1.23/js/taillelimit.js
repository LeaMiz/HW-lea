var height = "" ;
var access = "denied";
var limit = 150;
var height = prompt("How tall are you ");
if ( height > limit) {
    access = "granted"

}
var message = "your access is " + access + " to the coaster roller ";
alert(message)