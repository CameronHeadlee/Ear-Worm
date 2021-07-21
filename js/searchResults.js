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