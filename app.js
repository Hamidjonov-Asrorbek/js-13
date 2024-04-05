// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let h2 = document.querySelector(".title");

// function btnPlus(){
//     btn2.disabled = false;
//     if(+h2.textContent == 10){
//         btn1.setAttribute("disabled", true);
//     }
//     else{
//         h2.textContent++
//     }
// }
// btn1.setAttribute("onclick", "btnPlus()")

// function btnMinus(){
//     if(+h2.textContent == 1){
//         btn1.setAttribute("disabled", true);
//     }
//     else{

//         h2.textContent--;
//     }
// }
// btn2.setAttribute("onclick", "btnMinus()")


// btn1.addEventListener("click", () =>{
//     btn2.disabled = false;
//     if(+h2.textContent == 10){
//         btn1.setAttribute("disabled", true);
//     }
//     else{
//         h2.textContent++;
//     }
// });

// btn2.addEventListener('click', () =>{
//     btn1.disabled = false;
//     if(+h2.textContent == 1){
//         btn1.setAttribute("disabled", true);
//     }
//     else{

//         h2.textContent--;
//     }
// });

// *****************************************************

// HOMEWORK

let body = document.querySelector("body");
let button = document.querySelector("#button");
let h4 = document.querySelector(".rang")
body.style.backgroundColor = "#FFF"

// background-color: rgb(65, 88, 208);
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

function RandomBack(){
    let rgb1 = Math.floor(Math.random()*255);
    let rgb2 = Math.floor(Math.random()*255);
    let rgb3 = Math.floor(Math.random()*255);

    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`
}

function RandomFoiz(){
    let foiz = Math.floor(Math.random()*100);

    return foiz;
}
console.log(RandomFoiz());

button.addEventListener( "click", () =>{
    let style = body.style.backgroundColor = RandomBack();
    let linear = body.style.backgroundImage = `linear-gradient(${RandomFoiz()}deg, ${style} 0%, ${RandomBack()} ${RandomFoiz()}%, ${RandomBack()} 100%)`;
    button.style.backgroundColor = RandomBack();
    // har bosganda buttonni backgroundi ham o'zgaradigan qildim
    h4.textContent = linear
});