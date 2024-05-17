//What we offer and the price:
var meals={"Meat":10,"Chicken":7,"Salad":3,"Rice":3,"Juice":2,"Sweets":4,"Macaroni":3,"Appetizers":5}
const keys=Object.keys(meals);

//What user checked:
var checkedInput=document.getElementsByName("contant");
var total=0;


//When Done! :
function calulateTotal(){
for(let i=0;i<checkedInput.length;i++){
    if(checkedInput[i].checked){
    var keys = checkedInput[i].value;
    total += meals[keys];
    }
}
document.getElementById("Display").innerHTML=total;
}


