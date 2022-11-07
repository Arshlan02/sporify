console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif =  document.getElementById('gif');
let masterSongName =  document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName : "Walking The Wire" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName : "295 Official Sidhu Moose Wala " , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/2.mp3".mp3, coverpath:"covers/2.jpg"},
    {songName : "Uska Hi Banana 1920 Evil Returns" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName : "Yeh jism hai toh kya - jism2" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName : "Sehmi hai dhadkan - Atif Aslam" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName : "Jeena Yahan Marna " , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/6.mp3",coverpath:"covers/6.jpg"},
    {songName : "Fitoor - OST" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/7.mp3",coverpath:"covers/7.jpg"},
    {songName : "Dandelions - RuthB" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/8.mp3",coverpath:"covers/8.jpg"},
    {songName : "Human - Rag n Bone Man" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/9.mp3",coverpath:"covers/9.jpg"},
    {songName : "Raaz e Ulfat - OST" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/10.mp3",coverpath:"covers/10.jpg"},
    {songName : "Mere HumSafar - OST" , filepath: "/Users/arshlannadeem/Desktop/Spotify/songs/11.mp3s",coverpath:"covers/11.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element,i);  
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
   
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})