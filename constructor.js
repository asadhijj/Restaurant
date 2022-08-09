'use strict';
var id=1000;

const allFood =[];

function Food ( foodIDValue, foodNVlaue, typeValue, moneyValue) {
 this.id= id++;
 this.foodID = foodIDValue;
 this.foodN = foodNVlaue;
 this.type = typeValue;
 this.money = moneyValue;

allFood.push(this);
}


 Food.prototype.render = function () {
    let table= document.getElementById('table');

    let row=document.createElement('tr');
    table.appendChild(row);

    let id=document.createElement('td');
    id.textContent=`${this.foodID}`;

    let name=document.createElement('td')
    name.textContent=`${this.foodN}`;

    let type=document.createElement('td')
    type.textContent=`${this.type}`;

    let price=document.createElement('td')
    price.textContent=`${this.money}`;

    row.appendChild(id,name,type,price)    
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
 







