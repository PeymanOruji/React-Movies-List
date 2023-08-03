import {movies} from "./movies";
import {MovieType} from './Movies.types'

interface State {
    movies: MovieType[],
    search: string
}

export enum ActionType {
    add = 'Movie_Added',
    remove = 'Movie_Removed',
    search = ''
}

interface Action {
    type: ActionType,
    payload: string
}

export const initialState: State = {movies: movies, search: ''}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.add:
            return {
                ...state, movies: state.movies.map((movie) => {
                    if (movie.id === action.payload) {
                        movie.selected = true;
                    }
                    return movie;
                })
            }
        case ActionType.remove:
            return {
                ...state, movies: state.movies.map((movie) => {
                    if (movie.id === action.payload) {
                        movie.selected = false;
                    }
                    return movie;
                })
            }
        case ActionType.search:
            return {
                search: action.payload,
                movies: initialState.movies.filter(movie => movie.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default: {
            return initialState
        }
    }
}