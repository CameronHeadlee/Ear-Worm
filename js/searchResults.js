
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
        for (var i = 0; i < Music.message.body.track_list.length; i++) {
          printResults(Music.message.body.track_list[i]);
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

function printResults(Music) {
    console.log(Music);

var resultCard = document.createElement('div');
resultCard.classList.add('card', 'blue-grey', 'darken-1');

var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Album_Name:</strong> ' + Music.track.album_name + '<br/>';

  if (Music.primary_genres) {
    bodyContentEl.innerHTML +=
      '<strong>Primary_Genres:</strong> ' + Music.track.primary_genres.music_genre_list.join(', ') + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
      '<strong>primary_genres:</strong> No subject for this entry.';
  }

  if (Music.track) {
    bodyContentEl.innerHTML +=
      '<strong>track:</strong> ' + Music.track.track_name;
  } else {
    bodyContentEl.innerHTML +=
      '<strong>track_name:</strong>  No description for this entry.';
  }

var linkButton = document.createElement('a');
linkButton.textContent = 'Listen Here';
linkButton.setAttribute('href', Music.track.url);
linkButton.classList.add('btn',);

resultBody.append(bodyContentEl, linkButton);
resultContent.append(resultCard);
}


// CALLS
musicsearch.addEventListener('submit', MusicSearchSubmit);
