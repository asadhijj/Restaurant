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

function saveData(){
    let stringD= JSON.stringify(allFood);
    localStorage.setItem("food",stringD)
}

function getData(){
    let item =localStorage.getItem("food")
    let gottenBack = JSON.parse(item)

    if(gottenBack !== null) {
        for (let i = 0; i < gottenBack.length; i++) {
            new Food (gottenBack[i].foodN, gottenBack[i].type, gottenBack[i].money);
}
    }
}


let form=document.getElementById('form');
form.addEventListener('submit',handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let name =event.target.foodName.value;
    let type =event.target.itemType.value;
    let money =event.target.price.value;
    new Food(name, type, money);
    saveData();
}
 getData();
 







