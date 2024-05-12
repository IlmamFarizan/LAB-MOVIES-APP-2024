import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovieSearch } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import { DiscoverMovies } from "../types/interfaces";
import { ListedMovie } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { useParams } from "react-router-dom";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const MovieSearchResultsPage: React.FC = () => {
  const { query } = useParams();
  console.log("Query is in serach page:");
  console.log(query);
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["searchMovie", query],
    () => getMovieSearch(query || "")
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  console.log("Query is:");
  console.log(query);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  const name = `Search Results For "${query}"`;

  return (
    <>
      <PageTemplate
        title={name}
        movies={displayedMovies}
        action={(movie: ListedMovie) => {
          return <AddToFavouritesIcon {...movie} />;
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default MovieSearchResultsPage;
