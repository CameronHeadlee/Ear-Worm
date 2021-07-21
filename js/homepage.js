var musicsearch = document.querySelector('#musicsearch');

function MusicSearchSubmit(event) {
    event.preventDefault();

    var searchInput = document.querySelector('#Search').value;


    if (!searchInput) {
        console.error('Please enter text to search!');
        return;
    }
    var SearchString = './searchPage.html?q=' + searchInput;
    location.assign(SearchString);

}

musicsearch.addEventListener('submit', MusicSearchSubmit);