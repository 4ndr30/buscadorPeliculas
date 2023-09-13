let apiKey = '4a8ccb35bbf3f28431db2f8bf4db419b'
let urlbase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'
let resultContainer = document.getElementById('results')

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', searchMovies);

searchInput.addEventListener('keydown', function (event) {

  if (event.keyCode === 13) {

    searchMovies();
  }
});

function searchMovies() {
  
  resultContainer.innerHTML = 'Searching...';
  let searchInputValue = searchInput.value;

  fetch(`${urlbase}?api_key=${apiKey}&query=${searchInputValue}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results));
    
}
    function displayMovies(movies){
        resultContainer.innerHTML = ''

        if(movies.length === 0){
            resultContainer.innerHTML = '<p> There were no hits </p>'
            return
        }
        movies.forEach(movie => {
            let movieDiv = document.createElement('div')
            movieDiv.classList.add('movie')

            let title = document.createElement('h2')
            title.textContent = movie.title

            let releaseDate = document.createElement('p')
            releaseDate.textContent ='The release date was' + movie.release_date

            let overview = document.createElement('p')
            overview.textContent = movie.overview

            let posterPath =urlImg + movie.poster_path
            let poster = document.createElement('img')
            poster.src = posterPath


            movieDiv.appendChild(poster)
            movieDiv.appendChild(title)
            movieDiv.appendChild(releaseDate)
            movieDiv.appendChild(overview)
            resultContainer.appendChild(movieDiv)
            
        });


        
    }



