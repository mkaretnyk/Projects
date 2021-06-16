let button = document.querySelectorAll('*[class^="item"]');
let input = document.querySelector('.input');
let clear = document.querySelector('.itemAC');

click();

function click(){
    for(let i=0; i<button.length; i++){
        button[i].addEventListener('click', function (e){ 
            let clickedBtn = e.target.getAttribute('class');
            let clickedBtnId = e.target.getAttribute('id');

            if(clickedBtn != "itemEqual" && clickedBtnId != "symbol"){
                let num = e.target.innerText;
                insert(num);
            }

            switch (clickedBtn){
                case "itemAC": clean();
                    break;
                case "itemC": cleanSymbol();
                    break;
                case "itemEqual":  equal();
                    break;
                case "itemPercent": percent();
                    break;
                case "itemPM": PM();
                    break;
            }

            if(input != 0 && clickedBtn != "itemEqual"){       
                replace();
            }

            if(clickedBtnId == "orange" || clickedBtn == "itemComa" && clickedBtn != "itemEqual"){
                checkRepeat();
            }

    });     
}

function insert(num) {
    if (input.innerText == 0) {
        input.innerText = "";
        input.innerText += num;
    } else
        input.innerText += num;
    }
}

function clean() {
    input.innerText = "0";
}

function replace(){
   clear.className = "itemC";
   clear.innerHTML = "C";
   
}

function replaceAgain(){
    clear.className = "itemAC";
    clear.innerHTML = "AC";
}

function cleanSymbol(){
    let str = input.innerText;
    input.innerText = str.substring(0, str.length - 1);
    if (input.innerText == 0) {
        input.innerText = "0";
        replaceAgain();
    }
}


function equal() {
    let str = input.innerText; 

    let temp = str.replaceAll('÷', "/");
    let temp1 = temp.replaceAll('×', "*");
    let newStr = temp1.replaceAll(',', ".");

    replaceAgain();
    input.innerText = eval(newStr);


}


function percent(){
    input.innerText = eval(input.innerText) / 100;
   
}

function PM (){
    let str = input.innerText;

    let arr = str.split('');
    arr.unshift("-");

    if(arr[1] == "-"){
        let text = arr.splice(2, arr.length);
        input.innerText = text; 
    }
    else{
    let text = arr.join('');     
    input.innerText = text; 
    }
}

function checkRepeat(){
    let str = input.innerText;
    let arr = str.split('');
    
    if(arr[arr.length - 2] == arr[arr.length-1]){
        let text = arr.splice(0, arr.length - 2);
        let result = text.join('')
        input.innerText = result; 
    }
    else{
        let symbol = ['÷','×', '+', '-'];

        for(let i = 0; i < symbol.length; i++){
            if(symbol[i] == arr[arr.length-2]){
                let text = arr.splice(0, arr.length - 2);
                let result = text.join('')
                input.innerText = result; 
            }
        }
    }   
}