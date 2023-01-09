var menu = "steak";
var carnivor = confirm("Please confirm that you are not vegetarian");
if (carnivor === false) {
    menu = "salad ";
}
var message = "Welcome your " + menu + " is almost served ";
alert(message);