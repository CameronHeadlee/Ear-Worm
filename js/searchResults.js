
//GLOBAL VARIABLES 
var player;
var resultContent = document.querySelector("#livesearch")
var musicsearch = document.querySelector('#musicsearch');

//FUNCTIONS
var YTP = "https://www.youtube.com/iframe_api"; 
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

function onPlayerReady(event) {
    event.target.playVideo();
  }


  function onPlayerReady(event) {
    event.target.playVideo();
  }
  

function MusicSearch(query) {
    var locMMURL = 'https://api.musixmatch.com/ws/1.1/search/?q=' + query;

    fetch(locMMURL)
    .then(function (response) {
      if(!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (locRes) {
      resultText.textContent = locRes.search.query;

      console.log(locRes);

      if(!locRes.results.length) {
        console.log('No results found!');
        resultContent.textContent = '';
        for (var i = 0; i < locRes.results.length; i++) {
          printResults(locRes.resluts[i]);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
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
