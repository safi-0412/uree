const from = document.getElementById("form");
const input = document.getElementById("input");
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const soz = document.getElementById("text")

let count = 0;


from.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputningQiymati = Number(input.value);
    soz.textContent = inputningQiymati;
    count = inputningQiymati;
    input.value = "";

})

btnPlus.addEventListener("click", function(safina) {
    safina.preventDefault()
    count++;
    console.log(count);  
    soz.textContent = count;
});

btnMinus.addEventListener("click", function(safi) {
    safi.preventDefault();
    count--;
    console.log(count);  
    soz.textContent = count;
});

document.getElementById("colorPicker").addEventListener("input", function(event) {
    document.body.style.color = event.target.value;
});









// const knopka = document.getElementById("btn");

// console.log(knopka);

// knopka.addEventListener("click", function() {
//     console.log("Button Bosildi");
//     const newTag = document.createElement("h1");

//     newTag.textContent = "Bosildi";
//     document.body.appendChild(newTag);
// })
// const userName = prompt("Ismgizni kiriting");

// const newTag = document.createElement("h1");

//     newTag.textContent = userName;
//     document.body.appendChild(newTag);