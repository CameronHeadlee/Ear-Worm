var musicsearch = document.querySelector('#musicsearch');

function MusicSearchSubmit(event) {
    event.preventDefault();

    var searchInput = document.querySelector('#Search');

    if (!searchInput) {
        console.error('Please enter text to search!');
        return;
    }
    var SearchString = './search-results.html?q=' + searchInput;
    location.assign(SearchString);

}

MusicSearch.addeventlistener('submit', MusicSearchSubmit);