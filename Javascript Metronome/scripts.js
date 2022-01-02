const tempDisplay = document.querySelector('.tempo');
//main bigg number 
const tempoText = document.querySelector('.tempo-text');
//text under numner
const decTempo = document.querySelector('.decr-tempo');
//decrese bpm <button type=""></button>
const incTempo = document.querySelector('.incer-tempo');
//increase bpm <button type=""></button>
const tempoSlide = document.querySelector('.main-bpm');
//bpm slider
const startStop = document.querySelector('.strt-stop');
//staert button
const decBeat = document.querySelector('.sub-beat');
//decrease sub beat
const incBeat = document.querySelector('.add-beat');
//increase sub beat
const measureCount = document.querySelector('.measurecount');
//sub beat value

//------------------!======
//variables done 


let bpm = 120; //bigger number
let subbeat = 4; //smaller number
let tempoTextstr = Allegro;
// ------

//events

decTempo.addEventListener('click', () => {
    if (bpm <= 10) { return } //check to come out if reached min value
    bpm--;
    // tempDisplay.textContent = bpm;
    // tempoSlide.value = bpm;
    vaildTemp(); // validating via funct now
    updateMetro(); //update value via function 
});
incTempo.addEventListener('click', () => {
    if (bpm >= 300) { return } //check to come out if reached max value
    bpm++;
    vaildTemp(); // validating via funct now
    updateMetro();
});
tempoSlide.addEventListener('input', () => {
    bpm = tempoSlide.value;
    vaildTemp(); // validating vai funct now
    updateMetro();
});

// tempoSlide.addEventListener('change', () => {
//     bpm = tempoSlide.value;
//     tempDisplay.textContent = bpm;
//     tempoSlide.value = bpm; //reassign the value (updated)
// })
//ruled out chage for design issue 

decBeat.addEventListener('click', () => {
    if (subbeat <= 2) { return };
    subbeat--;
    measureCount.textContent = subbeat;

});
incBeat.addEventListener('click', () => {
    if (subbeat >= 12) { return };
    subbeat++;
    measureCount.textContent = subbeat;

});

function updateMetro() {
    tempDisplay.textContent = bpm;
    tempoSlide.value = bpm;

    tempoText.textContent = tempoTextstr;
}

function vaildTemp() {
    if (bpm <= 10) { return };
    if (bpm >= 300) { return };



}