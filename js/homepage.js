var musicsearch = document.querySelector('#musicsearch');

function MusicSearchSubmit(event) {
    event.preventDefault();

    var searchInput = document.querySelector('#Search').value;

    var SearchString = './searchPage.html?q=' + searchInput;
    location.assign(SearchString);
}

musicsearch.addEventListener('submit', MusicSearchSubmit);