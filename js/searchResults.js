
//GLOBAL VARIABLES 
var player;

var resultContent = document.querySelector('#livesearch');
var musicsearch = document.querySelector('#musicsearch');

//FUNCTIONS
var YTP = "https://www.youtube.com/iframe_api"; 

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
  


  function onPlayerReady(event) {
    event.target.playVideo();
  }
  

function MusicSearch(query) {
    var locMMURL = 'https://api.musixmatch.com/ws/1.1/track.search?apikey=54136b8efe820fb6dfbc6d2a8179c359&q=' + query;

    fetch(locMMURL)
    .then(function (response) {
      if(!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (Music) {
      console.log(Music);
        for (var i = 0; i < Music.length; i++) {
          printResults(track_list[i]);
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

    MusicSearch(searchInput);

}

function printResults(Songtitle) {
    console.log(Songtitle);

var resultCard = document.createElement('div');
resultCard.classList.add('card');

var title = document.createElement('h3');
title.textContent = Songtitle.title;

var linkButton = document.createElement('a');
linkButton.textContent = 'Listen Here';
linkButton.setAttribute('href', Songtitle.url);
linkButton.classList.add('btn',);

resultContent.append(resultCard);
}


// CALLS
musicsearch.addEventListener('submit', MusicSearchSubmit);
