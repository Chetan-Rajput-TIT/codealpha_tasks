const tracks = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "https://mp3.pm/song/71346997/Matt_Nash_-_Know_my_love/"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "https://www.example.com/path_to_song_2.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "https://www.example.com/path_to_song_3.mp3"
    }
];

let currentTrackIndex = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function loadTrack(index) {
    audio.src = tracks[index].src;
    title.textContent = tracks[index].title;
    artist.textContent = tracks[index].artist;
}

function playTrack() {
    audio.play();
    playBtn.textContent = 'Pause';
}

function pauseTrack() {
    audio.pause();
    playBtn.textContent = 'Play';
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

// Load the initial track
loadTrack(currentTrackIndex);
