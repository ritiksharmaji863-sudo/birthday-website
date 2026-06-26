console.log(document.getElementById("balloons-container"));
const countdown = document.getElementById("countdown");
const countdownSection = document.getElementById("countdown-section");
const welcomeSection = document.getElementById("welcome-section");
const balloons = document.querySelectorAll(".balloon");

balloons.forEach(balloon => {

    // Random Horizontal Position
    balloon.style.left = Math.random() * 100 + "vw";

    // Random Size
    let size = 60 + Math.random() * 40;
    balloon.style.width = size + "px";
    balloon.style.height = size * 1.3 + "px";

    // Random Duration
    balloon.style.animationDuration = (8 + Math.random() * 6) + "s";

    // Random Delay
    balloon.style.animationDelay = Math.random() * 5 + "s";
});

// Keep changing balloon positions
setInterval(() => {

    balloons.forEach(balloon => {

        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = (8 + Math.random() * 6) + "s";

    });

},12000);

let count = 3;

const timer = setInterval(() => {

    count--;

    if(count > 0){
        countdown.innerHTML = count;
    }

    else if(count === 0){
        countdown.innerHTML = "❤️";
    }

    else{
        clearInterval(timer);

        countdownSection.classList.remove("active");
        welcomeSection.classList.add("active");
    }

},1000);


/* Floating Hearts */

const heartsContainer =
document.getElementById("hearts-container");

for(let i=0;i<40;i++){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100 + "%";

    heart.style.animationDuration =
    (5 + Math.random()*5) + "s";

    heart.style.fontSize =
    (15 + Math.random()*25) + "px";

    heartsContainer.appendChild(heart);
}


/* Next Page Function */

function nextPage(nextId){

    const pages =
    document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
    .getElementById(nextId)
    .classList.add("active");
}


/* Secret Message */

const heartBtn =
document.getElementById("heartBtn");

const secretMessage =
document.getElementById("secretMessage");

heartBtn.addEventListener("click",()=>{

    secretMessage.style.display="block";

    heartBtn.innerHTML =
    "💖 Thank You Hansi 💖";
});
const cake = document.querySelector(".cake");

cake.addEventListener("click", () => {
    // Shake Animation
    cake.classList.add("cut");

    // Cake Emoji Change
    cake.textContent = "🍰";

    // Remove Animation Class
    setTimeout(() => {
        cake.classList.remove("cut");
    }, 500);

    // Back to Cake
    setTimeout(() => {
        cake.textContent = "🎂";
    }, 2500);
});
const foods = document.querySelectorAll(".bowl, .plate");

foods.forEach(food => {
    food.addEventListener("click", () => {

        // Pop Animation
        food.classList.add("food-click");

        // Save original text
        const originalText = food.innerHTML;

        // Change text temporarily
        food.innerHTML = "😋 Yum! Delicious";

        setTimeout(() => {
            food.innerHTML = originalText;
            food.classList.remove("food-click");
        }, 1200);

    });
});



