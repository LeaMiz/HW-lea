var adress = "";
var adressValid = [];

var adress = prompt("Enter youre gmail adress mail").split("@");

function adressmail(){

    if(adress [1].includes("gmail")){
        adress[0] = adress[0].replace(".", "");
        adressValid = adress.join("@").toLowerCase();
        return "my adress is " + adressValid
    }
}
alert(adressmail());