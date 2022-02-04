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

const clickmain = new Audio('main-beat.mp3');
//sound Main
const clicksub = new Audio('sub-beat.mp3');
//Sound sub beat
//------------------!======
//variables done 

// clickmain.play();
// clicksub.play();

let bpm = 120; //bigger number
let subbeat = 4; //smaller number
let ttstr = tempoText.textContent;
// console.log(ttstr);

// ------

//events

decTempo.addEventListener('click', () => {
    if (bpm <= 20) { return } //check to come out if reached min value
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

    if (bpm <= 20) { ttstr = "Larghissimo" };

    if (bpm > 20 && bpm <= 40) { ttstr = "Solenne/Grave" };

    if (bpm > 40 && bpm <= 60) { ttstr = "Largo" };

    if (bpm > 60 && bpm <= 66) { ttstr = "Larghetto" };

    if (bpm > 66 && bpm <= 76) { ttstr = "Larghetto" };

    if (bpm > 66 && bpm < 79) { ttstr = "Larghetto" };

    if (bpm == 80) { ttstr = "Tranquillo" };

    if (bpm > 80 && bpm <= 116) { ttstr = "Allegretto" };

    if (bpm > 116 && bpm <= 120) { ttstr = "Allegro moderato" };

    if (bpm > 120 && bpm <= 156) { ttstr = "Allegro" };

    if (bpm > 156 && bpm <= 176) { ttstr = "Vivace" };

    if (bpm > 176 && bpm <= 200) { ttstr = "Presto" };

    if (bpm > 200 && bpm <= 300) { ttstr = "Prestissimo" };

    //added values based on tempo

    tempoText.textContent = ttstr;
};

function vaildTemp() {
    if (bpm <= 20) { return };
    if (bpm >= 300) { return };
};