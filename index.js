window.onload = () => {
    console.log('hi')
}

const sc = document.querySelector('section');
window.addEventListener('scroll',() => {
    let y = window.scrollY;
    sc.style.clipPath = "circle(" + y + "px at center)"
})

let ham = document.getElementById('ham')
let hamnav = document.getElementById('hamnav')
ham.onclick = () => {
    if (hamnav.style.display === '') {
        hamnav.style.display = 'block'
    } else {
        hamnav.style.display = ''
    }
}

let interDate = new Date("Jan 23, 2021").getTime()

let x = setInterval(() => {
    let now = new Date().getTime();
    let d = interDate - now;

    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((d % (1000 * 60)) / 1000);

    let timer = document.getElementById('timer')
    timer.innerHTML = days + " Days " + hours + " Hours " + minutes + " Mins " + seconds + " Secs " 
    
    if (d < 0) {
        clearInterval(x);
        timer.innerHTML = "Good Luck on the interview :)";
      }
    }, 1000);

let snd = new Audio("./assets/yay.mp3"); // buffers automatically when created
snd.play();

let easter = document.getElementById('easter')
easter.onclick = () => {
    snd.play();
}

const det1 = document.getElementById('det1')
const det2 = document.getElementById('det2')
let m;

const educationDetail = (s) => {
    console.log(s)
    if (s === 'uni') {
        m = "I'm excited to be challenged and thriving in my dream university. Starting 9 August 2021"  
    } else if (s === 'kinder') {
        m = 'I studied at Thampirak School during my kindergarten years'
    } else if (s === 'high') {
        m = "I chose science-math programme, Khemasiri Memorial School for high school. I'm currently studying in year 12 with current total GPAX of 4.00. I started to participated in camps and competitions during high school."
    } else if (s === 'junior') {
        m = 'I continued to study at Khemasiri Memorial School. I graduated year 9 with 4.00. I also scored 100 on Year 9 Engling O-NET examination.'
    } else if (s === 'prim') {
        m = 'I moved to Khemasiri Memorial School for primary school. I graduated year 6 with the grade of 3.76. I also scored 100 on Year 6 English O-NET examination.'
    }
    det1.innerHTML = m
    det2.innerHTML = m
}
