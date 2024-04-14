const scissorsEl = document.getElementById("scissorsEl");
const stoneEl = document.getElementById("stoneEl");
const paperEl = document.getElementById("paperEl");

let totalCounter = document.getElementById("totalCounter");
let winsCounter = document.getElementById("winsCounter");
let lostCounter = document.getElementById("lostCounter");
let drawCounter = document.getElementById("drawCounter");
let btnReset = document.getElementById("btnReset");

let computerMove ="";

/* Mai sus am agatat elementele HTML, iar de aici incep sa lucrez pe ele! */

/*scissors */
scissorsEl.addEventListener("click", ()=> {
    let randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber<3/10){
        computerMove = "scissors";
    } else if (randomNumber >= 3/10 && randomNumber<6/10)
     {  computerMove ="rock";} 
     else if (randomNumber>=6/10 && computerMove<10/10){
        computerMove = "paper"; };

if(computerMove ==="scissors"){
    modal2Paragraf.innerText="Egalitate";
    openModal2();
     /*alert("Tu ai ales scissors, computerul a ales scissors, deci e EGALITATE"!);*/
    drawCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="rock"){
    modal2Paragraf.innerText="Ai pierdut!"
    openModal2();
    /*alert ("Tu ai ales scissors, computerul a ales rock, AI PIERDUT!");*/
    lostCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="paper"){
    modal2Paragraf.innerText="Ai castigat!"
    openModal2();
    /*alert("Tu ai ales scissors, computerul a ales paper, AI CASTIGAT");*/
    winsCounter.innerHTML++;
    totalCounter.innerHTML++;
};
});


/*stone */
stoneEl.addEventListener("click", ()=>{
    let randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber<3/10){
        computerMove = "scissors";
    } else if (randomNumber >= 3/10 && randomNumber<6/10)
     {  computerMove ="rock";} 
     else if (randomNumber>=6/10 && computerMove<10/10){
        computerMove = "paper"; };

if(computerMove ==="scissors"){
    modal2Paragraf.innerText="Ai castigat!"
    openModal2();
    /*alert("Tu ai ales rock, computerul a ales scissors, deci AI CASTIGAT!");*/
    winsCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="rock"){
    modal2Paragraf.innerText="Egalitate!"
    openModal2();
    /*alert ("Tu ai ales rock, computerul a ales rock, EGALITATE!");*/
    drawCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="paper"){
    modal2Paragraf.innerText="Ai pierdut!"
    openModal2();
    /*alert("Tu ai ales rock, computerul a ales paper, AI PIERDUT");*/
    lostCounter.innerHTML++;
    totalCounter.innerHTML++;

};
})

/*paper */
paperEl.addEventListener("click", ()=>{
    
    let randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber<3/10){
        computerMove = "scissors";
    } else if (randomNumber >= 3/10 && randomNumber<6/10)
     {  computerMove ="rock";} 
     else if (randomNumber>=6/10 && computerMove<10/10){
        computerMove = "paper"; };

if(computerMove ==="scissors"){
    modal2Paragraf.innerText="Ai pierdut!"
    openModal2();
    /*alert("Tu ai ales paper, computerul a ales scissors, deci AI PIERDUT!");*/
    lostCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="rock"){ 
    modal2Paragraf.innerText="Ai castigat!"
    openModal2();
    /*alert ("Tu ai ales paper, computerul a ales rock, AI CASTIGAT!");*/
    winsCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="paper"){
    modal2Paragraf.innerText="Egalitate!"
    openModal2();
    /*alert("Tu ai ales paper, computerul a ales paper, EGALITATE");*/
    drawCounter.innerHTML++;
    totalCounter.innerHTML++;

};
});


/*buton Reset */
btnReset.addEventListener ("click", ()=>{
    openModal1();
    /*alert("Ai apasat Reset! Jocul va reincepe de la 0 !");*/
    totalCounter.innerHTML = 0;
    winsCounter.innerHTML = 0;
    lostCounter.innerHTML = 0;
    drawCounter.innerHTML = 0;
});


/* De aici incepe codul pentru modal 1  */

let modal1 = document.getElementById('modal1b');
let modal1CloseButton = document.getElementById("exitButonX");

function openModal1 () {
    modal1.style.visibility = "visible";
} 

function closeModal1 () {
       modal1.style.visibility = "hidden";
}

modal1CloseButton.addEventListener("click", closeModal1);

/* De aici incepe codul pt modal 2  */

let modal2 = document.getElementById('modal2b');
let modal2CloseButton = document.getElementById("exitButonX2");
let modal2Paragraf = document.getElementById("modalParagraf");

function openModal2 () {
    modal2.style.visibility = "visible";
} 

function closeModal2 () {
       modal2.style.visibility = "hidden";
}

modal2CloseButton.addEventListener("click",closeModal2)