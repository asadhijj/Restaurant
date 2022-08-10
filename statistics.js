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

function getData(){
    let item =localStorage.getItem("food")
    let gottenBack = JSON.parse(item)

    if(gottenBack !== null) {
        for (let i = 0; i < gottenBack.length; i++) {
            new Food (gottenBack[i].foodN, gottenBack[i].type, gottenBack[i].money);
}
    }
    renderItems()
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
    dataP.textContent = `${this.money} JOD`;
    row.appendChild(dataP);

    table.appendChild(row); 
}

function renderItems() {
    for (let i = 0; i < allFood.length; i++){
       allFood[i].render();
    }
}
getData();