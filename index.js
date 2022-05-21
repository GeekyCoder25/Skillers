window.onresize = function () {
    location.reload();
}
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let play2 = document.getElementById('play2');
let pause2 = document.getElementById('pause2');
let play3 = document.getElementById('play3');
let pause3 = document.getElementById('pause3');
let playBorder = document.getElementById('playBorder');
let playBorder2 = document.getElementById('playBorder2');
let playBorder3 = document.getElementById('playBorder3');
let prototype = document.getElementById('prototype');
let finding = document.getElementById('finding');
let arcane = document.getElementById('arcane');
let audio = document.getElementById('myAudio');
let audio2 = document.getElementById('myAudio2');
let audio3 = document.getElementById('myAudio3');
let lessThan = document.getElementsByClassName('lt');
let rightThan = document.getElementsByClassName('gt');
let index = "mine";


lessThan[0].addEventListener('mouseover', moveLeftTop);
lessThan[0].addEventListener('click', moveLeftTop);
rightThan[0].addEventListener('mouseover', moveRightTop);
rightThan[0].addEventListener('click', moveRightTop);
lessThan[1].addEventListener('mouseover', moveLeft);
lessThan[1].addEventListener('click', moveLeft);
rightThan[1].addEventListener('mouseover', moveRight);
rightThan[1].addEventListener('click', moveRight);
function pressPlay() {
    if (play.style.display === "none") {
        play.style.display = "block";
        pause.style.display = "none";
        prototype.style.animation = "none"
        audio.pause();
        playBorder.style.borderStyle = "solid";
    }
    else {
        play.style.display = "none";
        pause.style.display = "block";
        prototype.style.animation = "marquee 10s infinite linear";
        finding.style.animation = "none"
        arcane.style.animation = "none"
        play2.style.display = "block";
        pause2.style.display = "none";
        play3.style.display = "block";
        pause3.style.display = "none";
        playBorder2.style.borderStyle = "solid";
        playBorder3.style.borderStyle = "solid";
        audio.play();
        playBorder.style.borderStyle = "dotted";

    }
    if (audio2.play() || audio3.play()) {
        audio2.pause();
        audio3.pause();
    }
}
function doublePressPlay() {
    audio.load();
    pause.style.display = "none";
    play.style.display = "block";
    prototype.style.animation = "none"
    playBorder.style.borderStyle = "solid";
}
function pressPlay2() {
    if (play2.style.display === "none") {
        play2.style.display = "block";
        pause2.style.display = "none";
        finding.style.animation = "none";
        audio2.pause();
        playBorder2.style.borderStyle = "solid";
    }
    else {
        play2.style.display = "none";
        pause2.style.display = "block";
        finding.style.animation = "marquee 10s infinite linear";
        prototype.style.animation = "none";
        arcane.style.animation = "none";
        play.style.display = "block";
        pause.style.display = "none";
        play3.style.display = "block";
        pause3.style.display = "none";
        playBorder.style.borderStyle = "solid";
        playBorder3.style.borderStyle = "solid";
        audio2.play();
        playBorder2.style.borderStyle = "dotted"
    }
    if (audio.play() || audio3.play()) {
        audio.pause();
        audio3.pause();
    }
}
function doublePressPlay2() {
    audio2.load();
    pause2.style.display = "none";
    play2.style.display = "block";
    finding.style.animation = "none"
    playBorder2.style.borderStyle = "solid";
}
function pressPlay3() {
    if (play3.style.display === "none") {
        play3.style.display = "block";
        pause3.style.display = "none";
        arcane.style.animation = "none"
        audio3.pause();
        playBorder3.style.borderStyle = "solid";
    }
    else {
        play3.style.display = "none";
        pause3.style.display = "block";
        arcane.style.animation = "marquee 10s infinite linear";
        prototype.style.animation = "none";
        finding.style.animation = "none"
        play.style.display = "block";
        pause.style.display = "none";
        play2.style.display = "block";
        pause2.style.display = "none";
        playBorder.style.borderStyle = "solid";
        playBorder2.style.borderStyle = "solid";
        audio3.play();
        playBorder3.style.borderStyle = "dotted";

    }
    if (audio.play() || audio2.play()) {
        audio.pause();
        audio2.pause();
    }
}
function doublePressPlay3() {
    audio3.load();
    pause3.style.display = "none";
    play3.style.display = "block";
    arcane.style.animation = "none"
    playBorder3.style.borderStyle = "solid";
}
function moveRightTop() {
    let x = document.getElementById('continue');
    let statistics = document.getElementById('statistics-left')

    x.style.transition = 'transform 0.5s linear';
    statistics.style.transition = 'transform 0.5s linear';
    continue_one[0].style.display = "block";
    continue_two[0].style.display = "block";
    continue_three[0].style.display = "block";


    if (index === "mine" || x.style.transform === 'translateX(0px)') {
        x.style.transform = 'translateX(-10vw)';
        statistics.style.transform = 'translateX(-10vw)';
        index = "mine2";
    }
    else {
        statistics.style.transform = 'translateX(-20vw)';
        x.style.transform = 'translateX(-20vw)';
    }
}
function moveLeftTop() {
    let x = document.getElementById('continue');
    let statistics = document.getElementById('statistics-left');

    if (x.style.transform === 'translateX(-20vw)') {
        x.style.transform = 'translateX(-10vw)';
        statistics.style.transform = 'translateX(-10vw)';
    }
    else if (x.style.transform === 'translateX(-10vw)') {
        statistics.style.transform = 'translateX(0px)';
        x.style.transform = 'translateX(0px)';
    }
    else {
        continue_one[0].style.display = "block";
        continue_two[0].style.display = "block";
        continue_three[0].style.display = "block";
    }
}
function moveRight() {
    let x = document.getElementById('courses-sub');

    x.style.transition = 'transform 0.3s linear';
    x.style.transform = 'translateX(-10vw)';
}
function moveLeft() {
    let x = document.getElementById('courses-sub');

    x.style.transform = 'translateX(0px)';
}

let search = document.getElementById('search-space-mobile')
let nav_menu = document.getElementById('nav-links')
let menu = document.getElementById('menu')
let searchm = document.getElementById('search-button-mobile')
let close = document.getElementById('xmark')

function pressSearch() {
    (search.style.display === "block") ? search.style.display = "none" : search.style.display = "block";
}
function pressSideMenu() {
    nav_menu.style.display = "block";
    nav_menu.style.animation = "navlinks 0.3s linear 1";
    search.style.display = "none";
    searchm.style.display = "none";
    menu.style.display = "none"
}
function pressClose() {
    if (nav_menu.style.display === "block") {
        nav_menu.style.display = "none";
        searchm.style.display = "block";
        menu.style.display = "inline-block"
    }
    else {
        nav_menu.style.display = "block";
        search.style.display = "none";
    }
}

let continue_one = document.getElementsByClassName('continue-one');
let continue_two = document.getElementsByClassName('continue-two');
let continue_three = document.getElementsByClassName('continue-three');

function pressLeftMobile() {
    if ((continue_one[0].style.display === "block") && (continue_two[0].style.display === "none") && (continue_three[0].style.display === "none") || (continue_one[0].style.display === "")) {
        alert('Sorry! 🙇 seems this is the first Audio');
        audio.load();
        play.style.display = "block";
        pause.style.display = "none";
        prototype.style.animation = "none"
        audio.pause();
        playBorder.style.borderStyle = "solid";
    }
    else if ((continue_one[0].style.display === "none") && (continue_two[0].style.display === "block") && (continue_three[0].style.display === "none")) {
        continue_one[0].style.display = "block";
        continue_two[0].style.display = "none";
        continue_three[0].style.display = "none";
        audio2.load();
        play2.style.display = "block";
        pause2.style.display = "none";
        finding.style.animation = "none";
        audio2.pause();
        playBorder2.style.borderStyle = "solid";
    }
    else {
        continue_one[0].style.display = "none";
        continue_two[0].style.display = "block";
        continue_three[0].style.display = "none";
        audio3.load();
        audio2.load();
        play3.style.display = "block";
        pause3.style.display = "none";
        arcane.style.animation = "none";
        audio3.pause();
        playBorder3.style.borderStyle = "solid";
    }
}
function pressRightMobile() {
    if ((continue_one[0].style.display === "block") && (continue_two[0].style.display === "none") && (continue_three[0].style.display === "none") || (continue_one[0].style.display === "")) {
        continue_two[0].style.display = "block";
        continue_one[0].style.display = "none";
        continue_three[0].style.display = "none";
        audio.load();
        play.style.display = "block";
        pause.style.display = "none";
        prototype.style.animation = "none";
        audio.pause();
        playBorder.style.borderStyle = "solid";
    }
    else if ((continue_one[0].style.display === "none") && (continue_two[0].style.display === "block") && (continue_three[0].style.display === "none")) {
        continue_three[0].style.display = "block";
        continue_one[0].style.display = "none";
        continue_two[0].style.display = "none";
        audio2.load();
        play2.style.display = "block";
        pause2.style.display = "none";
        finding.style.animation = "none";
        audio2.pause();
        playBorder2.style.borderStyle = "solid";
    }
    else if ((continue_one[0].style.display === "none") && (continue_two[0].style.display === "none") && (continue_three[0].style.display === "block")) {
        alert('Sorry! 🙇 seems this is the last Audio')
        audio3.load();
        play3.style.display = "block";
        pause3.style.display = "none";
        arcane.style.animation = "none"
        audio3.pause();
        playBorder3.style.borderStyle = "solid";
    }
}
let width = screen.width;
let height = screen.height;
// location.reload()
alert('Switch between dektop view and mobile view to see the changes and responsiveness \nYour screen width is ' + width + "\nYour screen height is " + height);