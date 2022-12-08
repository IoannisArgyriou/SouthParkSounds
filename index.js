var numberOfButtons = document.querySelectorAll(".south").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".south")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    })
}


function makeSound(key) {

    switch (key) {
        case "Stan":
            var stan = new Audio('sounds/Stan.mp3');
            stan.play();
            break;

        case "Eric":
            var eric = new Audio('sounds/cartman.mp3');
            eric.play();
            break;

        case "Kenny":
            var kenny = new Audio("sounds/Kenny.mp3");
            kenny.play();
            break;

        case "Kyle":
            var kyle = new Audio("sounds/Kyle.mp3");
            kyle.play();
            break;
    }
}