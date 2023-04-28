const header = document.getElementById('header');
const txtRGBT = document.getElementById("txtRGBT");
const playGame = document.getElementById("playGame");
const tryAgan = document.getElementById("seconda");
const footer = document.getElementById("footer");
let answer=undefined;

let red = undefined;
let green = undefined;
let blue = undefined; 

playGame.addEventListener("click", () => {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${red}, ${green}, ${blue})`;
    header.style.backgroundColor = bgColor;
    tryAgan.classList.remove("d-none");
    tryAgan.innerHTML="TRY AGAIN";
    const children = footer.querySelectorAll('div');
    for (const iterator of children) {
        iterator.style.display = "inline-block";
        iterator.style.backgroundColor = `rgb(${red+(Math.floor(Math.random() * 50))}, ${green+(Math.floor(Math.random() * 100))}, ${blue+(Math.floor(Math.random() * 20))})`;
    }
    answer=Math.floor(Math.random() * 3);
    console.log(answer);
    children[answer].style.backgroundColor = bgColor;
    txtRGBT.innerHTML=`RGB(${red},${green},${blue})`;
});

footer.addEventListener("click", (e) => {
    console.log(e.target.id);
    if(e.target.id==answer){
        tryAgan.innerHTML="CORRECT";
    }
    else{
        e.target.style.display = "none";
    }
});