import React from 'react';
import MovieCard from "./MovieCard";

export default {
    title: 'MovieCard',
    component: MovieCard
}

const movieNormal =     {
        id: "287947",
        title: "Shazam!",
        poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        overview:
            "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        release_date: 1553299200,
        genres: ["Action", "Comedy", "Fantasy"],
    }
const movieAdded =     {
        id: "287947",
        title: "Shazam!",
        poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        overview:
            "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        release_date: 1553299200,
        genres: ["Action", "Comedy", "Fantasy"],
    selected:true,
    }

export const NormalMovieCardComponent = ()=> <MovieCard movie={movieNormal} action={()=>null}/>
export const AddedMovieCardComponent = ()=> <MovieCard movie={movieAdded} action={()=>null}/>