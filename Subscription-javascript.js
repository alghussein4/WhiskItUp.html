//What we offer and the price:
var meals={"Meat":10,"Chicken":7,"Salad":3,"Rice":3,"Juice":2,"Sweets":4,"Macaroni":3,"Appetizers":5}
const keys=Object.keys(meals);

//What user checked:
var checkedInput=document.getElementsByName("contant");
var selected=[];


//When Done! :
function  getItemTotal(){
var total=0;
for(let i=0;i<checkedInput.length;i++){
    if(checkedInput[i].checked){
    var keys = checkedInput[i].value;
    total += meals[keys];
    }
}
return total;
}

/*function receipt(){
    for (let i = 0; i<checkedInput.length; i++) {
        if (checkedInput[i].checked) {
          selected.push(checkboxes[i].value);
        }
      }
      console.log(checkedValues);
      document.getElementById('content').textContent = `${selected.join(', ')}`;
}*/

function getPeopleTotal(){
  //Number of ppl:
  var i=document.getElementById("numOfPortions").value;
  var ppl = Number(i)*10;
  return ppl;
}

//Total:
function calculateTotal(){
  var total=getItemTotal()+getPeopleTotal();
  window.alert('Your order is set, it might need 12 hours to arrive'); //alert
  document.getElementById("Display").innerHTML="Total:  "+total+"$";
}


