const waterInputElement = document.getElementById("water");
const beansInputElement = document.getElementById("beans");
const coffeeMugElement = document.getElementById("coffeeMug");


function coffeeMachine(water, beans) {
    if (water > beans) {
        coffeeMugElement.innerHTML = "Not so strong coffee";
        coffeeMugElement.className = "weakCoffee";
    }
    else if (water < beans) {
        coffeeMugElement.innerHTML = "Very strong coffee";
        coffeeMugElement.className = "strongCoffee";
    }
    else if (water === beans) {
        coffeeMugElement.innerHTML = "Perfectly brewed coffee";
        coffeeMugElement.className = "normalCoffee";
    }
    else {
        coffeeMugElement.innerHTML = "You put something strange into our coffee machine.";
        coffeeMugElement.className = "";
    }
}

function makeCoffee() {
    let waterArgument = Number(waterInputElement.value);
    let beansArgument = Number(beansInputElement.value);

    coffeeMachine(waterArgument, beansArgument);
}