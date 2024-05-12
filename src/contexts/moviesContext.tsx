import React, { useState } from "react";
import { ListedMovie, MovieT, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: ListedMovie) => void;
  removeFromFavourites: (movie: ListedMovie) => void;
  addReview: (movie: ListedMovie, review: Review) => void;
  addToPlayList: (movie: ListedMovie) => void;
  playList: number[];
  removeFromPlayList: (movie: ListedMovie) => void;
}

const initialContextState = {
  favourites: [],
  addToFavourites: (movie: ListedMovie) => {
    movie.id;
  },
  removeFromFavourites: (movie: ListedMovie) => {
    movie.id;
  },
  addReview: (movie: ListedMovie, review: Review) => {
    movie.id, review;
  },
  addToPlayList: (movie: ListedMovie) => {
    movie.id;
  },
  playList: [],
  removeFromPlayList: (movie: ListedMovie) => {
    movie.id;
  },
};

export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [myReviews, setMyReviews] = useState<Review[]>([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [playList, setPlayList] = useState<number[]>([]);

  const addToFavourites = (movie: ListedMovie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie: ListedMovie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie: ListedMovie, review: Review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToPlayList = (movie: ListedMovie) => {
    let updatedPlayList = [...playList];
    if (!playList.includes(movie.id)) {
      updatedPlayList.push(movie.id);
    }
    setPlayList(updatedPlayList);
  };

  const removeFromPlayList = (movie: ListedMovie) => {
    setPlayList(playList.filter((mId) => mId !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        playList,
        addToPlayList,
        removeFromPlayList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
