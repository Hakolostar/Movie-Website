// Serching by Move Title

const leftDiv = document.getElementById('left-div');
const rightDiv = document.getElementById('right-div');
const searchMovie = (title,year,rated,released,runTime,genre,director,writer,actors,plot,language,country,awards,poster) => {
  leftDiv.innerHTML = `
  <img src="${poster}" alt="Movie Poster">`
  rightDiv.innerHTML = `
  <div>
  <h2>${title}</h2> 
  <p>Year: ${year}</p> 
  <p>Rated: ${rated}</p> 
  <p>Released: ${released}</p> 
  <p>Runtime: ${runTime}</p> 
  <p>Genre: ${genre}</p> 
  <p>Director: ${director}</p> 
  <p>Writer: ${writer}</p> 
  <p>Actors: ${actors}</p> 
  <p>Plot: ${plot}</p> 
  <p>Language: ${language}</p> 
  <p>Country: ${country}</p> 
  <p>Awards: ${awards}</p> 
  </div>
  `; }


// Searching Movie 
  // assigning the api key
const apiKey = '2d681e65';
const apiUrl = 'hi'
  // getting the api key for tittle search
const btn1 = document.getElementById('btn1')
  // getting the api key for id search
const btn2 = document.getElementById('btn2')
btn2.addEventListener('submit',byID)
// function for the title search
const byTitle = () => { 
  console.log('hi')
  const searchTitle = document.getElementById('searchInput').value; 
  apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(searchTitle)}`; 
  API()
}
// fucntion for the id serach
const byID = () => {
  const searchId = document.getElementById('searchInputId').value;
  apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(searchId)}`;
  API(apiUrl) 
}
btn1.addEventListener('submit',byTitle)


    // Make an HTTP request to the API endpoint
const API = (apiUrl) => {
  console.log(apiUrl)
      fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
          // Process the API response
          if (json.Response === 'True') {
            // Movie found, access the movie details from the 'data' object
           
searchMovie(json.Title,json.Year,json.rated,json.Released,json.Runtime,json.Genere,json.Director,json.Writer,json.Actors,json.Plot,json.Language,json.Country,json.Awards,json.Poster)
          } else {
            // Movie not found or error occurred
            const searchResultsDiv = document.getElementById('searchResults');
            searchResultsDiv.innerHTML = `<p>Movie not found</p>`;
          }
        })
        .catch(error => {
          // Handle any errors
          console.log('Error occurred:', error);
        });
}
/*const API_KEY = '2d681e65';
    const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&page=`;

    async function fetchMovies(page) {
      const response = await fetch(BASE_URL + page);
      if (response.ok) {
        const data = await response.json();
        return data.Search || [];
      } else {
        console.error('Error occurred while fetching movies.');
        return [];
      }
    }

    async function displayMovies() {
      const moviesContainer = document.getElementById('moviesContainer');
      let page = 1;
      let movies = [];

      while (true) {
        const fetchedMovies = await fetchMovies(page);

        if (fetchedMovies.length === 0) {
          break; // No more movies to fetch, exit the loop
        }

        movies = movies.concat(fetchedMovies);
        page++;
      }

      movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `<h3>${movie.Title}</h3><p>${movie.Year}</p>`;
        moviesContainer.appendChild(movieElement);
      });
    }

    displayMovies();







    const API_KEY = '2d681e65';
    const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&page=`;

    async function fetchMovies(page) {
      const response = await fetch(BASE_URL + page);
      if (response.ok) {
        const data = await response.json();
        return data.Search || [];
      } else {
        console.error('Error occurred while fetching movies.');
        return [];
      }
    }

    async function displayMovies() {
      const moviesContainer = document.getElementById('moviesContainer');
      let page = 1;
      let movies = [];

      while (true) {
        const fetchedMovies = await fetchMovies(page);

        if (fetchedMovies.length === 0) {
          break; // No more movies to fetch, exit the loop
        }

        movies = movies.concat(fetchedMovies);
        page++;
      }

      movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `<h3>${movie.Title}</h3><p>${movie.Year}</p>`;
        moviesContainer.appendChild(movieElement);
      });
    }

    displayMovies();
    
*/