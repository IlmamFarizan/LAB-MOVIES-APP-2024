import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import PlayListMoviesPage from "./pages/playListPage";
import TVShowsHomePage from "./pages/tvShowsHomePage";
import TVShow from "./pages/tvShowDetailsPage";
import TVShowContextProvider from "./contexts/tvShowsContext";
import FavouriteTVShowsPage from "./pages/favouriteTVShowsPage";
import TVShowsAiringTodayPage from "./pages/tvShowsAiringTodayPage";
import PeopleHomePage from "./pages/peopleHomePage";
import PeopleDetailPage from "./pages/peopleDetailPage";
import PersonMoviesPage from "./pages/personMoviesPage";
import PersonTVShowsPage from "./pages/personTVShowsPage";
import AddMovieTVShowPage from "./pages/addTVShowReviewPage";
import MovieCast from "./pages/movieCastPage";
import MovieCrew from "./pages/movieCrewPage";
import TVShowSimilar from "./pages/tvShowSimilarPage";
import TVShowSearch from "./pages/tvShowSearchPage";
import TVShowSearchResults from "./pages/tvShowSearchResults";
import MovieSearch from "./pages/movieSearchPage";
import MovieSearchResults from "./pages/movieSearchResults";
import PersonSearch from "./pages/personSearchPage";
import PersonSearchResults from "./pages/personSearchResults";
import FavouritePeoplePage from "./pages/favouritePeoplePage";
import PeopleContextProvider from "./contexts/peopleContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <TVShowContextProvider>
            <PeopleContextProvider>
              <Routes>
                {/* Reviews Module */}
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route
                  path="/reviews/tv/form"
                  element={<AddMovieTVShowPage />}
                />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />

                {/* Movies Module */}
                <Route
                  path="/movies/favourites"
                  element={<FavouriteMoviesPage />}
                />
                <Route
                  path="/movies/upcoming"
                  element={<UpcomingMoviesPage />}
                />
                <Route
                  path="/movies/playList"
                  element={<PlayListMoviesPage />}
                />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/movies/:id/cast" element={<MovieCast />} />
                <Route path="/movies/:id/crew" element={<MovieCrew />} />
                <Route path="/movies/search/" element={<MovieSearch />} />
                <Route
                  path="/movies/search/:query/results"
                  element={<MovieSearchResults />}
                />
                <Route path="/" element={<HomePage />} />

                {/* No Page Fallback */}
                <Route path="*" element={<Navigate to="/" />} />

                {/* TV Shows Module */}
                <Route path="/tvshows/" element={<TVShowsHomePage />} />
                <Route path="/tvshows/:id" element={<TVShow />} />
                <Route path="/tvshows/search/" element={<TVShowSearch />} />
                <Route
                  path="/tvshows/search/:query/results"
                  element={<TVShowSearchResults />}
                />
                <Route
                  path="/tvshows/:id/similar"
                  element={<TVShowSimilar />}
                />
                <Route
                  path="/tvshows/favourites/"
                  element={<FavouriteTVShowsPage />}
                />
                <Route
                  path="/tvshows/today"
                  element={<TVShowsAiringTodayPage />}
                />

                {/* People Module */}
                <Route path="/people" element={<PeopleHomePage />} />
                <Route path="/people/:id" element={<PeopleDetailPage />} />
                <Route
                  path="/people/:id/movies"
                  element={<PersonMoviesPage />}
                />
                <Route
                  path="/people/favourites"
                  element={<FavouritePeoplePage />}
                />
                <Route
                  path="/people/:id/tvShows"
                  element={<PersonTVShowsPage />}
                />
                <Route path="/people/search/" element={<PersonSearch />} />
                <Route
                  path="/people/search/:query/results"
                  element={<PersonSearchResults />}
                />
              </Routes>
            </PeopleContextProvider>
          </TVShowContextProvider>
        </MoviesContextProvider>
        <SiteHeader />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
