var taxe = "";
var salaire = prompt("Enter your salaire")
var legal = confirm ("please confirm that your salaire is less than 25000");
if(legal === true){
    taxe = (salaire) * 0.1;
} else if (confirm("please confirm that your salaire is less than 50000")=== true) {
    taxe = (salaire - 25000) * 0.2 ;
} else if (confirm("please confirm that your salaire is less than 100000")=== true) {
    taxe = 7500 + (salaire - 50000) * 0.3;
} else if (confirm("please confirm that your salaire is less than 150000")=== true) {
    taxe = 22500 + (salaire - 100000) * 0.4 ;
}else if (confirm ("please confirm that your salaire is greater than 150000")=== true) {
    taxe = 42500 + (salaire - 150000) * 0.5;
}

var message = "Your taxe is" + taxe ;
alert (message);
