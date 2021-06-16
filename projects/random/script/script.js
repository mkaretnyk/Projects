let min = document.getElementById("min");
let max = document.getElementById("max");
let count = document.getElementById("count");
let btn = document.getElementById("button");
let text = document.getElementById("text");


click();

function click(){
    btn.addEventListener('click', function (e){
        text.innerText = "";
        let minimal = +min.value;
        let maximum = +max.value;
        let arr = [];
        
        if(count.value == ""){
            count.value = 1;
        }
        for(let i = 0; i < count.value; i++){
            let num = randomNum(minimal, maximum);
            arr.push(num);
        }
        text.innerText = arr;
    })
}

function randomNum(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}