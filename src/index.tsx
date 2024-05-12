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
            <Routes>
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route path="/movies/playList" element={<PlayListMoviesPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/tvshows/" element={<TVShowsHomePage />} />
              <Route path="/tvshows/:id" element={<TVShow />} />
              <Route
                path="/tvshows/favourites/"
                element={<FavouriteTVShowsPage />}
              />
              <Route
                path="/tvshows/today"
                element={<TVShowsAiringTodayPage />}
              />
            </Routes>
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
