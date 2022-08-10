'use strict';
var id=1000;


const allFood =[];

function Food ( foodNVlaue, typeValue, moneyValue) {
 this.foodID =  id++;
 this.foodN = foodNVlaue;
 this.type = typeValue;
 this.money = moneyValue;

allFood.push(this);
}


 Food.prototype.render = function () {
    let table = document.getElementById("table");

    let row = document.createElement("tr");
    row.setAttribute("class", "data");

    let data = document.createElement("td");
    data.setAttribute("class", "data");
    data.textContent = `${this.foodID}`;
    row.appendChild(data); 

    let dataN = document.createElement("td");
    dataN.setAttribute("class", "data");
    dataN.textContent = `${this.foodN}`;
    row.appendChild(dataN); 

    let dataR = document.createElement("td");
    dataR.setAttribute("class", "data");
    dataR.textContent = `${this.type}`;
    row.appendChild(dataR); 

    let dataP = document.createElement("td");
    dataP.setAttribute("class", "data");
    dataP.textContent = `${this.money} JD`;
    row.appendChild(dataP);

    table.appendChild(row); 
}

let form=document.getElementById('form');
form.addEventListener('submit',handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let name =event.target.foodName.value;
    let type =event.target.itemType.value;
    let money =event.target.price.value;
    let newFood = new Food(name, type, money);
    newFood.render();
}
function renderItems() {
    for (let i = 0; i < allFood.length; i++){
       allFood[i].render();
    }
}
 







