export interface BaseMovie {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  playList?: boolean;
}

export interface BaseMovieList {
  movies: BaseMovie[];
}

export interface MovieT extends BaseMovie {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    id: number;
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface ListedMovie extends BaseMovie {
  genre_ids: number[];
}

export type FilterOption = "title" | "genre";

export interface MovieListPageTemplateProps {
  movies: ListedMovie[];
  title: string;
  action: (m: ListedMovie) => React.ReactNode;
}

export interface Review {
  id: string;
  content: string;
  author: string;
}

interface UpcomingMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovie[];
}

export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovie[];
}

export interface Review {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  movieId: number;
}

export interface BaseTVShow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  favourite?: boolean;
  playList?: boolean;
}
