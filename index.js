let xp = 0;
let health = 100;
let gold = 50;
let inventory = ["stick"];
let weaponUsing = 0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

const text = document.querySelector("#text");

const weapons = [
  {name: 'stick', power: 5},{name: 'sword', power: 50},{name: 'bow', power: 100}, {name: 'wand', power: 150}
  ]

const locations = [{
  name: "town square",
  "button text": ["Go to store", "Go to cave", "Fight dragon"],
  "button functions": [goStore, goCave, fightDragon],
  text: "You are in the town square. You see a sign that says \"Store\"."
},
{
  name: "store",
  "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
  "button functions": [buyHealth, buyWeapon, toTown],
  text: "You enter the store."
},
{
  name: "cave",
  "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
  "button functions": [fightSlime, fightBeast, toTown],
  text: "You enter the cave. You see some monsters."
},
{
  name: "fight",
  "button text": ["Attack", "Dodge", "Run"],
  "button functions": [attack, dodge, toTown],
  text: "You are fighting a monster."
},
]

  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  

  function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
  }

function toTown(){
  update(locations[0]);
}

function goStore(){
  update(locations[1]);
}

function goCave(){
 update(locations[2]);
}

function buyHealth(){
  if(gold >= 10){
    health += 10;
    gold -= 10;
    healthText.innerText = health;
    goldText.innerText = gold;
  }else{
    text.innerText = "You are out of gold.";
  }
  }
 
function buyWeapon(){
  if(gold >=30){
    gold -= 30;
    goldText.innerText = gold;
    weaponUsing += 1;
    text.innerText = "You have a " + weapons[weaponUsing].name + ".";
    inventory.push(weapons[weaponUsing].name);
    text.innerText += "You have " + inventory + " in your inventory.";
  }else{
    text.innerText = "You don't have enough gold.";
  }
}

function fightDragon(){
  button1.innerText = "Attack";
  button2.innerText = "Dodge";
  button3.innerText = "Run";
  text.innerText = "You are fighting the dragon";
  monsterStats.style.display = "block";
}
function fightSlime(){

}
function fightBeast(){

}
function attack(){

}
function dodge(){}