
//GLOBAL VARIABLES 
var player;

var resultContent = document.querySelector('#livesearch');
var musicsearch = document.querySelector('#musicsearch');




//FUNCTIONS 
// var YTP = "https://www.youtube.com/iframe_api";

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     playerVars: {
//       'playsinline': 1
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
//     event.target.playVideo();
//   }


  
// function onPlayerReady(event) {
//     event.target.playVideo();
//   }
  


//   function onPlayerReady(event) {
//     event.target.playVideo();
//   }
  
// Directly injecting variable into the server rather than waiting for the browser to put it together 
function MusicSearch(query) {
    var locMMURL = `https://api.musixmatch.com/ws/1.1/track.search?apikey=54136b8efe820fb6dfbc6d2a8179c359&q=${query}`
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

function rerun() {
  return function MusicSearchSubmit() {''};
}

function MusicSearchSubmit(event) {
    event.preventDefault();

    var searchInput = document.querySelector('#Search').value;

    if (!searchInput) {
        console.error('Please enter text to search!');
        return; }
    // } elseif (resultContent > 0) {
    //   clear resultContent;
    // }

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
    '<strong>Album Name:</strong> ' + Music.track.album_name + '<br/>';

  if (Music.track.artist_name) {
    bodyContentEl.innerHTML +=
     '<strong>Artist Name:</strong> ' + Music.track.artist_name + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Artist Name:</strong> No subject for this entry.' + '<br/>';

  }

  if (Music.track) {
    bodyContentEl.innerHTML +=
      '<strong>Track:</strong> ' + Music.track.track_name;
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Track:</strong>  No description for this entry.';
  }
  
var linkButton = document.createElement('a');
linkButton.textContent = 'Listen Here';

linkButton.onclick = function () {ListenHere};

linkButton.classList.add('btn',);

resultBody.append(bodyContentEl, linkButton);
resultContent.append(resultCard);

}

// pass variables as arguments 
// pass snippet into listen here function 
// template literals 
// refactor fe


function ListenHere(video) {
var YThttp = "https://www.googleapis.com/youtube/v3/search";
var YTapikey = "AIzaSyDYdJMzzOZAcm23t_SAwPYCVQTp0lsmzBk";




  );
};

// This is as far as I got. The issue is that it is not allowing me to create a new API key
// If you click the fetch link you will see that it will display an invalid API key. I searched
// for best music API keys and this seemed to be one of the best for searching various parameters like
//  Artists, songs, albums, etc. 
function ListenHere() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4b9eb06844msh2593a5e43d37842p15d2e7jsnd7dac4b64d82",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}

// CALLS

musicsearch.addEventListener('submit', MusicSearchSubmit);
rerun ()
