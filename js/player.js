
// ===PLAYER===

var audioPlayer = document.getElementById('audioPlayer');
var audioSource = document.getElementById('audioSource');
var loaded = false;

var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    audioPlayer.pause();
    return false;
});


playBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    audioPlayer.play();
    return false;
});

function playSong(file){

    let atributo = file.getAttribute('data-file');

    audioSource.src = atributo;
    audioPlayer.load();
    audioPlayer.play();

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";

}

// ####

// ===SOM===

// --variaveis som--

var vol = document.getElementById('vol');
var volume = document.getElementById('vol_control');

// --eventos som--
vol.onclick = () => toggleMute();
volume.oninput = () => setVolume(volume.value);
volume.onchange = () => setVolume(volume.value);

// --funções som--

function toggleMute(){

    audioPlayer.muted = !audioPlayer.muted;

    if(audioPlayer.muted == true){
        vol.style.opacity = '.3'
    }else{
        vol.style.opacity = '1'
    }

};

function setVolume(value){

    audioPlayer.volume = value / 100

};

// ####

// ===SEEKBAR===

// --variaveis seekbar--

var seekbar = document.getElementById('seekbar');
var currentDuration = document.getElementById('current-duration');
var totalDuration = document.getElementById('total-duration');

// --eventos seekbar--
audioPlayer.onloadeddata = () => {
    audioPlayer.ontimeupdate = () => timeUpdate();
    seekbar.oninput = () => setSeek(seekbar.value);
    seekbar.onchange = () => setSeek(seekbar.value);
    seekbar.max = audioPlayer.duration;
    totalDuration.innerText = secondsToMinuts(audioPlayer.duration);
};

// --funções seekbar--

function setSeek(value){
    audioPlayer.currentTime = value
};

function secondsToMinuts(time){

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;

};

function timeUpdate(){

    currentDuration.innerText = secondsToMinuts(audioPlayer.currentTime);
    seekbar.value = audioPlayer.currentTime;

}

// ####