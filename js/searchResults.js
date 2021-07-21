
//GLOBAL VARIABLES 
var player;

//FUNCTIONS 
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

//CALLS 
function onPlayerReady(event) {
    event.target.playVideo();
  }
  

var musicsearch = document.querySelector('#musicsearch');

function MusicSearch(query) {
    var locMMURL = 'https://www.musixmatch.com/search/?fo=json';
}



function MusicSearchSubmit(event) {
    event.preventDefault();

    var searchInput = document.querySelector('#Search').value;

    if (!searchInput) {
        console.error('Please enter text to search!');
        return;
    }

    SearchMusixMatch(searchInput);

}

musicsearch.addEventListener('submit', MusicSearchSubmit);

