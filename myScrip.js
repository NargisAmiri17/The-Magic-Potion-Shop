// The Magic Potion Shop

// 1. Start the Game (Variables, Template Literals, Type conversion)
let playerName = prompt("What's your name, apprentice?");
let playerAge = Number(prompt("How old are you?"));
let favoriteElement = prompt("What's your favorite element? (fire, water, earth, air)");

alert(`Welcome ${playerName}! At ${playerAge}, you're ready to master the powers of ${favoriteElement}!⭐`);

// Player's gold
let gold = 50;

// 2. Stock Setup (Arrays, Objects, and Methods)N
let potionNames = ["Healing Potion", "Mana Elixir", "Invisibility Draft", "Fire Resistance"];

let potionStock = {
    "Healing Potion": { quantity: 5, price: 10},
    "Mana Elixir": { quantity: 3, price: 15},
    "Invisibility Draft": { quantity: 2, price: 25},
    "Fire Resistance": { quantity: 4, price: 20}
};


// 3. Customer Orders (if/else, switch, loops)
for (let i = 0; i < 3; i++) {
    let Customer = prompt("A customer is here! Take their order? (Yes/ No)").toLowerCase();

    if (Customer === "yes") {
        let menu = "";
        potionNames.forEach((potion, index) => {
            menu += `${index + 1}. ${potion} - ${potionStock[potion].price} gold (${potionStock[potion].quantity} in stock)\n`;
        });

        let choice = prompt(menu + "Which potion would they like? (Enter name)").trim();

        if (potionStock[choice]) {
            if (potionStock[choice].quantity > 0) {
                potionStock[choice].quantity--;
                gold += potionStock[choice].price;
                alert(`🧪 ${choice} sold! You earned 💰${potionStock[choice].price} gold.`);
            }
            else {
                alert("Sorry, that potion is out of stock!");
            }
        }
        else {
            alert("We don't have that potion!");
        }
    }
    else {
        alert("No customer served this time.");
    }
};

// 4. Brewing Potion (Functions, Loops, Array Methods)
function brewPotion(potionName, amount) {
    potionName = potionName.trim();
    if (potionStock[potionName]) {
        potionStock[potionName].quantity += amount;
        alert(`Brewed ${amount} of ${potionName}! Now is stock: ${potionStock[potionName].quantity}`);
    }
    else {
        alert("That potion doesn't exist in the shop.");
    }
};

// Let them brew 2-3 times
for (let i = 0; i < 2; i++) {
    let potionToBrew = prompt("Which potion do you want to brew?");
    let brewAmount = Number(prompt("How many do you want to brew?"));
    brewPotion(potionToBrew, brewAmount);
}

// 5. End of Day Report (Objects, Destrucuring, string Methods)
let potionsLeft = "";
for (let potion in potionStock) {
    potionsLeft += `${potion}: ${potionStock[potion].quantity} left\n`;
}

alert(`Great job, ${playerName.toUpperCase()}!
    You now have ${gold.toFixed(2)} gold 💰.
    Potions left in stock: ${potionsLeft}`);