let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let h1 = document.querySelector("h1");
    let randomcolour = getrandomcolour();
    h3.innerText = randomcolour;
    h1.style.backgroundColor = randomcolour;

    let div = document.querySelector(".box>div");
    div.style.backgroundColor = randomcolour;
})
 function getrandomcolour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let colour = `rgb(${red} , ${green}, ${blue})`;
    return colour;
}
