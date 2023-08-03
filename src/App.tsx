import React, {useReducer} from "react";
import {MovieType} from './Movies.types';
import MovieCard from "./components/MovieCard";
import {ActionType, initialState, reducer} from "./reducer";
import Nav from "./components/Nav";
import classes from "./App.module.scss";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddClick = (movie: MovieType) => {
        dispatch({type: ActionType.add, payload: movie.id})
    };

    const handleRemoveClick = (movie: MovieType) => {
        dispatch({type: ActionType.remove, payload: movie.id})
    };

    const handleSearch = (searchedTitle: string) => {
        dispatch({type: ActionType.search, payload: searchedTitle})
    }

    const selectedMovies = state.movies.filter(movie => movie.selected);

    return (
        <div className={classes.App}>
            <Nav onSearch={handleSearch} search={state.search}/>
            <div className={classes.container}>
                <div className={classes.leftMovieContainer}>
                    {state.movies.filter(movie => movie.selected === undefined || movie.selected === false).map((movie) => {
                        return (
                            <MovieCard action={() => handleAddClick(movie)} key={`left-${movie.id}`} movie={movie}/>
                        );
                    })}
                </div>
                {
                    selectedMovies.length > 0 &&
                    <div className={classes.rightMovieContainer}>
                        {selectedMovies.map((movie) => {
                            return (
                                <MovieCard action={() => handleRemoveClick(movie)} key={`right-${movie.id}`}
                                           movie={movie}/>
                            );
                        })}
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
