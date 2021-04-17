const musicContainer  = document.querySelector('.music-container');
const playBtn  = document.querySelector('#play');
const prevBtn  = document.querySelector('#prev');
const nextBtn  = document.querySelector('#next');
const audio  = document.querySelector('#audio');
const progress  = document.querySelector('.progress');
const progressContainer  = document.querySelector('.progress-container');
const title  = document.querySelector('#title');
const cover  = document.querySelector('#cover');


// Song title
const songs = ['batanala'];

// keep track of songs
let songIndex = 2;

//Initially load song info dom
loadSong(songs[songIndex]);

//update song details
function loadSong(song){
    title.innerHTML = song
    audio.scr = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}







