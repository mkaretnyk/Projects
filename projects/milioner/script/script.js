let quesText = document.querySelectorAll('button.ques > h3')[0];
let answerText = document.querySelectorAll('h3.textAnswer');
let liScore = document.querySelectorAll('li');
let button = document.querySelectorAll('button.answer');

let helpClass = document.querySelectorAll(".help");
let mainClass = document.querySelectorAll(".main");
let scoreClass = document.querySelectorAll(".score");
let commentClass = document.querySelectorAll(".comments");

let comment = document.getElementById('h3-comment-text');

let fiftyBtn = document.getElementById('fifty-img');
let callBtn = document.getElementById('call-img');
let showBtn = document.getElementById('show-img');

let yes = document.getElementsByClassName('yes');
let no = document.getElementsByClassName('no');

let flag = false;
let numQuestion = 0;
let score = 0;

//Start();
Game();

fiftyFifty();
callFriend();
askPeople();

function Game (){ 
    show(helpClass);
    show(mainClass);
    show(scoreClass);
    hide(commentClass);

    getQuestion();
    click(numQuestion);       
}

function Start(){
    hide(helpClass);
    hide(mainClass);
    hide(scoreClass);
    helpText();

    setTimeout(Game, 12000);  
}


function Next(){
    function waitColor(){
        numQuestion++;
        flag = false;
        getQuestion(numQuestion); 
        liScore[15-numQuestion].style.backgroundColor = "";
    }

    setTimeout(waitColor, 900);   
  
}

function EndGame(){
    hide(helpClass);
    hide(mainClass);
    hide(scoreClass);

    show(commentClass);

    comment.innerText = `К сожалению, вы проиграли. Ваша сумма составляет: ${score} Не расстраивайтесь и приходите еще!`
}

function WinGame(){
    hide(helpClass);
    hide(mainClass);
    hide(scoreClass);

    show(commentClass);
    comment.innerText = "Поздравляем! Вы выиграли миллион!!"
}

function getQuestion(){
    allQuestions.forEach((value) => {
        quesText.innerHTML  = value[numQuestion].question;
        answerText[0].innerHTML = value[numQuestion].A;
        answerText[1].innerHTML = value[numQuestion].B;
        answerText[2].innerHTML = value[numQuestion].C;
        answerText[3].innerHTML = value[numQuestion].D;
        liScore[14-numQuestion].style.backgroundColor = "#4e807d"; 
        for(let i=0; i<button.length; i++){
            button[i].style.backgroundColor = "#001233"; 
            let checkpoint = document.querySelectorAll("#checkpoint");
            score = checkpoint[i].innerHTML;
        }        
    });
}

function click(){   
    for(let i=0; i<button.length; i++){
        button[i].addEventListener('click', function (e){  
            hide(commentClass);             
            if(!flag){  
                flag = true;
                let clickedBtnId = e.target.getAttribute('id'); 
                var btnId = document.getElementById(`${clickedBtnId}`);                   
                console.log(clickedBtnId);                
                allQuestions.forEach((value) => {
                    let correct = value[numQuestion].answer;
                    console.log(correct);
                    if(clickedBtnId == correct){
                        btnId.style.backgroundColor = "green";                                                              
                        Next(numQuestion);                                                  
                    }
                    else{   
                        btnId.style.backgroundColor = "red";                
                        setTimeout(EndGame, 2000);                           
                    }
                });
            }            
        });
    }
}

function fiftyFifty(){
    fiftyBtn.addEventListener('click', function (e){
        allQuestions.forEach((value) => {

            let correct = value[numQuestion].answer;
            let buttA = document.getElementById('A');
            let buttB = document.getElementById('B');
            let buttC = document.getElementById('C');
            let buttD = document.getElementById('D');
            
            let idA = buttA.getAttribute('id');
            let idB = buttB.getAttribute('id');
            let idC = buttC.getAttribute('id');
            let idD = buttD.getAttribute('id');

            let buttons = [];
            buttons.push(idA, idB, idC, idD);

            let falseElem = [];
       

            for(let i = 0; i < buttons.length; i++){
                if(buttons[i] != correct){                   
                    falseElem.push(buttons[i]);                  
                }
            }
            let randomId = randomNum(0, 2)
            let excess = falseElem[randomId];
            let arr = [];

            for(let i = 0; i < falseElem.length; i++){
                if(falseElem[i] != excess && falseElem[i] != correct){
                    arr.push(falseElem[i]);
                }
            }
                   
            let incorrect1 = arr[0];
            let incorrect2 = arr[1]; 
            
            let btnId_1 = document.getElementById(`${incorrect1}`);      
            let btnId_2 = document.getElementById(`${incorrect2}`);  

            let btnBG_1 = btnId_1.querySelectorAll('h3');
            let btnBG_2 = btnId_2.querySelectorAll('h3');

            btnBG_1[0].innerHTML = " ";
            btnBG_1[1].innerHTML = " ";
            btnBG_2[0].innerHTML = " ";
            btnBG_2[1].innerHTML = " ";

            this.style.display = "none";
        })
    })
}

function callFriend(){
    callBtn.addEventListener('click', function (e){
        show(commentClass);
        allQuestions.forEach((value) => {

            let correct = value[numQuestion].answer;
            let buttA = document.getElementById('A');
            let buttB = document.getElementById('B');
            let buttC = document.getElementById('C');
            let buttD = document.getElementById('D');
            
            let idA = buttA.getAttribute('id');
            let idB = buttB.getAttribute('id');
            let idC = buttC.getAttribute('id');
            let idD = buttD.getAttribute('id');

            let buttons = [];

            buttons.push(idA, idB, idC, idD);

         
            for (var i = 0; i < complexity; i++) {    
                buttons.push(correct);
            }
            let randomId = randomNum(0, buttons.length-1);
            let randomAnswer = buttons[randomId];

            comment.innerText = `Вы выбрали звонок другу. Друг был очень озадачен, но просил передать, что правильный ответ вероятно - ${randomAnswer}`
            this.style.display = "none";
        });
        
    });
}

function askPeople(){
    showBtn.addEventListener('click', function (e){
        show(commentClass);
        let complexity = Math.floor((100-(numQuestion + 1)*10)/10);
        allQuestions.forEach((value) => {

            let correct = value[numQuestion].answer;
            let buttA = document.getElementById('A');
            let buttB = document.getElementById('B');
            let buttC = document.getElementById('C');
            let buttD = document.getElementById('D');
            
            let idA = buttA.getAttribute('id');
            let idB = buttB.getAttribute('id');
            let idC = buttC.getAttribute('id');
            let idD = buttD.getAttribute('id');

            let idBut = [idA, idB, idC, idD];

            let buttons = [idA, idB, idC, idD];
        
            for (let i = 0; i < complexity; i++) {    
                buttons.push(correct);
            }

            let filterValues = (str) => {
                return buttons.filter(data => {
                    return data.indexOf(str) > -1;
                });
            }           

            let aBtn = filterValues('A').length;
            let bBtn = filterValues('B').length;
            let cBtn = filterValues('C').length;
            let dBtn = filterValues('D').length;

            let allBtn = [];
            allBtn.push(aBtn, bBtn, cBtn, dBtn);

            let newCorrect = Math.max(...allBtn);

            let a = Math.floor((newCorrect * 100) / buttons.length);
            let b, c, d;
            for(let i = 0; i < allBtn.length; i++){
                if(aBtn[i] != newCorrect){
                   b = randomNum (0, 100 - a);
                   c = randomNum (0, 100 - a - b)
                   d = 100 - a - b - c;                   
                }
            }

            let arr = [a, b, c, d];

            let biggest = Math.max(...arr);
            biggest = correct;

            let falseElem = [];
            
            for(let i = 0; i < idBut.length; i++){
                if(idBut[i] != correct){
                    falseElem.push(idBut[i]);
                }
            }

            let title1 = falseElem[1];
            let title2 = falseElem[0];
            let title3 = falseElem[2];

            comment.innerText = `Посмотрим, каково мнение зрителей: \n${biggest} - ${a}% \n${title1} - ${b}% \n${title2} - ${c}% \n${title3} - ${d}%`
            this.style.display = "none";
        });
        
    });
}

function randomNum(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function helpText(){
    let lines = new Array(6)
    lines[0]="Правила игры очень просты"
    lines[1]="Все что вам нужно - выбрать один из четырех ответов"
    lines[2]="Если он окажется правильным - вы заработаете деньги и перейдете к следующему вопросу"
    lines[3]="У вас есть 3 вида подсказок: звонок другу, 50/50 и помощь зала"
    lines[4]="Удачи!"
    lines[5]="Игра началась!"

    var currentAda = 0
    var delay = 2000

    function cyclea() {      
        comment.innerHTML = lines[currentAda]                
        if(currentAda == 5){
            clearInterval(interval);
        }           
        currentAda++;
        }                            
    let interval= window.setInterval(cyclea,delay);   
}

function hide(arr){
    for(let i=0; i<arr.length; i++){
        arr[i].style.visibility = 'hidden';
    }
}

function show(arr){
    for(let i=0; i<arr.length; i++){
        arr[i].style.visibility = 'visible';
    }
}




