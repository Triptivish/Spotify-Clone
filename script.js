console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs=[
    {songName: "Hoshwalon ko khabar kya", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Jhoome Jo Pathan", filePath:"song/2.mp3", coverPath:"covers/1.jpg"},
    {songName: "Baazigar O Baazigar", filePath:"song/3.mp3", coverPath:"covers/1.jpg"},
    {songName: "Chaand Taare", filePath:"song/4.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tere liye", filePath:"song/5.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tum Mile", filePath:"song/6.mp3", coverPath:"covers/1.jpg"},
    {songName: "Mere bina", filePath:"song/6.mp3", coverPath:"covers/1.jpg"},
    {songName: "Hothon se choo lo tum", filePath:"song/6.mp3", coverPath:"covers/1.jpg"},
    
]
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
