const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
function update(location_placeholder) {
    monsterStats.style.display = "none";
    button1.innerText = location_placeholder ["button text"][0];
    button2.innerText = location_placeholder ["button text"][1];
    button3.innerText = location_placeholder ["button text"][2];
    button1.onclick = location_placeholder ["button functions"][0];
    button2.onclick = location_placeholder ["button functions"][1];
    button3.onclick = location_placeholder ["button functions"][2];
    text.innerHTML = location_placeholder.text;
}
function goTown() {
    update(locations[0]);
}  
function goStore() {
    update(locations[1]);
} 
function goCave() {
    update(locations[2]);
} 
function buyHealth () {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText =gold;
        healthText.innerText = health;
    }
    else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}
function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
      if (gold >= 30) {
        gold -= 30;
        currentWeapon++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeapon].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon);
        text.innerText += " In your inventory you have: " + inventory;
      } else {
        text.innerText = "You do not have enough gold to buy a weapon.";
      }
    } else {
      text.innerText = "You already have the most powerful weapon!";
      button2.innerText = "Sell weapon for 15 gold";
      button2.onclick = sellWeapon;
    }
  }
  function sellWeapon() {
    if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventory.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "Don't sell your only weapon!";
    }
  }

  function fightSlime () {
    fighting = 0;
    goFight();
  }
  function fightBeast() {
    fighting = 1;
    goFight();
  }
  function fightDragon() {
    fighting = 2;
    goFight();
  }
  function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
  }
  function attack() {
    text.innerText =  "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    health -= getMonsterAttackValue(monetrs[fighting].level);
  }