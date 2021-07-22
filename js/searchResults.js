
//GLOBAL VARIABLES 
var player;
var resultContent = document.querySelector("#livesearch");
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
    var locMMURL = 'https://www.musixmatch.com/search/?fo=json';

    locMMURL = locMMURL + '&q=' + query;

    fetch(locMMURL)
    .then(function (response) {
      if(!response.ok) {
        throw response.json();
      }
      return response.json();
    })
    .then(function (locRes) {

    })
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

function printResults(result) {
    console.log(result);

var resultCard = document.createElement('div');
resultCard.classList.add('card');

var title = document.createElement('h3');
title.textContent = result.title;

var linkButton = document.createElement('a');
linkButton.textContent = 'Listen Here';
linkButton.setAttribute('href', result.url);
linkButton.classList.add('btn',);

resultContent.append(resultCard);
}


// CALLS
musicsearch.addEventListener('submit', MusicSearchSubmit);


// NOTES FOR A STEP. PLEASE DO NOT REMOVE. 
// THIS WILL BE NEEDED TO TAKE RESULTS TO YOUTUBE API.
// var linkButtonEl = document.createElement('a');
// linkButtonEl.textContent = 'Read More';
// linkButtonEl.setAttribute('href', resultObj.url);
// linkButtonEl.classList.add('btn', 'btn-dark');