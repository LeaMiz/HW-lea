const  Categories = [
    { value: "", text:"--Choose a category--", active: true},
    { value: "Sport", text: "Sport", active: true},
    { value: "Casual", text: "Casual", active : true},
    { value: "Evening" , text: "Evening", active : true},
    { value: "Relax" , text: "Relax", active : true}
     ];

     const Products = [];
     
 createForm();
function createForm() {
    var model = myInput ("model-input"  , "Enter the model name", "text");
    var brand  = myInput ("brand-input"  , "Enter the brand name", "text");
    var price = myInput ("price-input"  , "Enter the  price", "number");
    var categories = mySelect( "category-select", "", Categories);
    var sale = myInput ("sale-input"  , "checkbox", "form-check-input");
    var btn = myButton ( "submit" , "" , "Add This Product" , addProduct);
    var formDiv = document.getElementById( "form-div");
   
    formDiv.append(
        model.div,
        brand.div,
        price.div,
        categories.div,
        sale.div,
        btn);


    function addProduct() {
        var obj = {};
        obj.model = model.input.value ;
        obj.brand = brand.input.value ; 
        obj.price = price.input.value ; 
        obj.category = categories.select.value ; 
        
        if(obj.model && obj.brand && obj.price && obj.category)
        { Products.push(obj);
         model.input.value = "";
         brand.input.value = "";
         price.input.value = "";
         categories.select.value = "";
         Card(obj)
    } else {
        switch (obj.model) {
            case "red": document.getElementsById("model.input.value").style.borderColor = "red";
                break; }
                switch (obj.brand) {
                    case "red": document.getElementsById("brand.input.value").style.borderColor = "red";
                        break;}
                        switch (obj.price) {
                            case "red": document.getElementsById("price.input.value").style.borderColor = "red";
                                break;  }
                                switch (obj.category) {
                                    case "red": document.getElementsById("category.input.value").style.borderColor = "red";
                                        break; 
                                     }
        console.log(obj);

            
        }
       
    }
}



function Card(obj) {
    var div = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    p1.innerText = "model " + obj.model;
    p2.innerText = "brand " + obj.brand
    p3.innerText = "price " + obj.price
    p4.innerText = "category " + obj.category
    div.append(p1);
    div.append(p2);
    div.append(p3);
    div.append(p4);
    document.getElementById("main").append(div)  }

  function myInput(_id , _placeholder,_type , _class = ""){
   var obj = {};
 
    obj.div = document.createElement ("div") // html obj , <div> </div>
    obj.input = document.createElement("input");// HtmL Obj <input/>
    obj.input.className = "form-control" + _class;
    obj.input.id = _id;// id de linput deviendra id 
    obj.input.placeholder = _placeholder;
    obj.input.type = _type; 
    obj.div.append(obj.input);
    return obj;
}

function mySelect(_id , _class = "", _arr)
{   var obj = {};
    obj.div = document.createElement ("div") 
    obj.select  = document.createElement("select");// <select > </select>
    obj.select.className = "form-select" + _class;
    obj.select.id = _id;
    for(let i = 0 ; i < _arr.length; i++ ){
        const opt = _arr[i];
        if (opt.active){
            var option = document.createElement("option");// <option> </option>
            option.value = opt.value; // <option value="..."> </option>
            option.innerText = opt.text;//<option value=".."> --choose a category-- </option>
            obj.select.append(option);
        }
    }
    obj.div.append(obj.select);
    return obj;
  

}


function myButton(_id , _class = "" , _text , _callback ){

 
    var div = document.createElement ("div") // html obj , <div> </div>
    var btn = document.createElement("button");// HtmL Obj <input/>
    btn.className = "btn btn-success" + _class;
    btn.id = _id;
    btn.innerText = _text; 
    btn.addEventListener( "click", _callback);
    div.append(btn);
   return div ;
}


       
  