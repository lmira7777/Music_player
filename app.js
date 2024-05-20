let allMusic = [
    {
        name: "Summertime Sadness",
        artist: "Lana Del Rey",
        img: "./img/images (1).jpg",
        src: "./songs/Lana Del Rey - Summer time sadness.mp3"
    },
    {
        name: "Numb",
        artist: "Linkin Park",
        img: "./img/images.jpg",
        src: "./songs/Linkin Park - Numb.mp3"
    },
    {
        name: "Shock to the system",
        artist: "Billy Idol",
        img: "./img/Ellipse 2.png",
        src: "./songs/Ïåñíÿ Billy Idol - Shock To The System [ backingtrackx.com ].mp3"
    }

]

let obvios = document.querySelector(".obvios")
let musicImg = document.querySelector(".image-area img")
let musicName = document.querySelector(".song-details .name")
let musicArtist = document.querySelector(".song-details .artist")
let mainAudio = document.getElementById("main-audio");
let playpauseBtn = document.querySelector(".fa-pause")
let nextBtn = document.querySelector("#next")
let prevBtn = document.querySelector("#prev")
let progressBar = document.querySelector(".progress-bar")
let mute = document.querySelector(".mute")
let onmute = document.querySelector(".onmute")

let musicIndex = 1;
window.addEventListener("load", () => {
    loadMusic(musicIndex);
})

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerHTML = allMusic[indexNumb - 1].artist;
    musicImg.src = `${allMusic[indexNumb - 1].img}`;
    mainAudio.src = `${allMusic[indexNumb - 1].src}`
}

function playMusic() {
    mainAudio.play()
}
function pauseMusic() {
    mainAudio.pause()
}
playpauseBtn.addEventListener("click", () => {
    const isMusicPaused = obvios.classList.contains("play-pause");

    isMusicPaused ? pauseMusic() : playMusic();
})

//next//prev

function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex)
    playMusic()
}
nextBtn.addEventListener("click", () => {
    nextMusic();
})

function prevMusic() {
    console.log("click");
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex)
    playMusic()
}
console.log(prevBtn);
prevBtn.addEventListener("click", () => {
    prevMusic();
})

mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`

    let musicCurrentTime =document.querySelector(".current-time"),
    musicDuration = document.querySelector(".max-duration");
    mainAudio.addEventListener('loadeddata',()=>{
        let mainAdDuration = mainAudio.duration
        let totalMin = Math.floor(mainAdDuration/60)
        let totalSec = Math.floor(mainAdDuration/60)
        if(totalSec < 10){
            total = `0${totalSec}`
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`
    })
})