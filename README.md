# Assignment 2 - React App

**Name:** ILMAM FARIZAN AURIC

**Video demonstration:** https://youtu.be/Bwvpr_DF2sc

### Features

- Nested Navigation

- Movies
  Movie List
  Movie Details
  View Movie Cast
  View Movie Crew
  Upcoming Movie List
  Playlist Upcoming Movie
  Favourite Movies
  Search Movies

- TV Shows

TV Shows List
TV Show Details
Latest TV Shows
Favourite TV Shows
Search TV Shows
Simlar TV Shows

- People

Actors List
Favourite Actors
Search People
Person Details

### API endpoints

- TV Show Genres - genre/tv
- Search for a person - person?query=:query
- Get similar tv shows based on tv show id - tv/:id/similar
- Get persons movie credits - person/:id/movie_credits
- Get Movie credits for cast and crew- movie/:id/credits
- TV Show Reviews - tv/:id/reviews
- Discover list of tv shows - discover/tv
- Movie genres - /genre/movie/list
- Get person images - person/:id/images
- Movie Images - movie/:id/images
- TV Show Images - tv/:id/images
- Discover list of movies - discover/movie
- Search for Movies - search/movie?query=:query
- Show person details - person/:id
- Movie Reviews - movie/:id/reviews
- Get Persons tv credits - person/:id/tv_credits
- Tv Show details - tv/:id
- Upcoming Movies - movie/upcoming
- TV Shows airing today - tv/airing_today
- Search for TV Shows - search/tv?query=:query
- Movie details - movie/:id
- List of popular people - person/popular
- Search for people - search/person?query=:query

### Routing

- /tvshows/search/:query/results" - page to display a list of tv shows returned from the search
- /tvshows/:id" - page to show tv show details of a selected tv show
- /people/search/:query/results" - page that shows a list of people from search results
- /tvshows/:id/similar" - page to show a list of tv shows similar to a selected tv show
- /movies/upcoming" - displays a list of upcoming movies
- /tvshows/favourites/" - page that shows a list of your favourite tv shows
- /movies/search/:query/results" - results of movie search showing a list of returned movies
- /tvshows/today" - page to show a list of tv shows that are airing today
- /tvshows/search/" - page to display a form to search for tv shows
- /movies/:id" - displays the details of a selected movie
- /people/favourites" - page to show a list of your favourite people
- /movies/search/" - form to enter a movie name to search for movies
- /tvshows/" - page displaying list of tv shows
- /movies/:id/crew" - displays a list of people who are the crew of a selected movie
- /movies/:id/cast" - displays a list of people who are the cast of a selected movie
- /movies/favourites" - displays list of movies that were added to favourites
- /people/:id/movies" - page that shows a list of movies for a selected person
- /people/:id/tvShows" - page that shows a list of tv shows for a selected person
- /reviews/:id" - displays a specific review
- /people/:id" - page that shows the details of a selected person
- /reviews/form - Form for writing a review for a movie
- /reviews/tv/form - Form for writing a review for a tv show
- /people/search/" - page to show a form to search for people
- /people" - page to show a list of popular people
