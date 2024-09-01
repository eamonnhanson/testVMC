let xp=0;
let health=100;
let gold =50;
let currentWeapon=0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
const weapons = [
    {name: "stick", power: 5},
    {name: "dagger", power: 30},
    {name: "claw hammer", power: 50},
    {name: "sword", power: 100}
];
const monsters = [
    {name: "slime", level: 2, health: 15},
    {name: "fanged beast", level: 8, health: 60},
    {name: "dragon", level: 20, health: 200}
];
const locations = [
    {name: "town square", 
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [],
        text: "You are in the town square. You see a sign that says \"Store\"."
        },
        {name: "store", 
            "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
            "button functions": [],
            text: "You enter the store."
            },
            {name: "cave", 
                "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
                "button functions": [],
                text: "You enter the cave. You see some monsters."
                },
                {name: "fight", 
                    "button text": ["Attack", "Dodge", "Run"],
                    "button functions": [],
                    text: "You are fighting a monster."
                    },
                    {name: "kill monster", 
                        "button text": ["Go to town square", "Go to town square", "Go to town square"],
                        "button functions": [],
                        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
                        },
                        {name: "lose", 
                            "button text": ["REPLAY?","REPLAY?", "REPLAY?"],
                            "button functions": [],
                            text: "You die. &#x2620;"
                            },
                            {name: "win", 
                                "button text": ["REPLAY?","REPLAY?", "REPLAY?"],
                                "button functions": [],
                                text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
                                },
                                {name: "easter egg", 
                                    "button text": ["2", "8", "Go to town square?"],
                                    "button functions": [],
                                    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
                                    },
];