import dayjs from "dayjs";
import classnames from 'classnames';
import {MovieType} from "../Movies.types";
import Button from "./kit/Button";
import truncate from "./utils/truncate";
import classes from './MovieCard.module.scss';

export default function MovieCard({action, movie}: { action: Function, movie: MovieType }) {
    return <div className={classnames(classes.movieCard, movie.selected ? classes.selected : undefined)}>
        <img src={movie.poster} alt={movie.title}/>
        <div className={classes.wrapper}>
            <div className={classes.genres}>
                {movie.genres.map((genre) => {
                    return <span key={genre}>{genre}</span>
                })}
            </div>
            <small>
                Release date: {dayjs.unix(movie.release_date).format("YYYY-MMM-DD")}
            </small>
            <h2 className={classes.movieTitle}>{movie.title}</h2>
            <p className={classes.overview}>
                {truncate(movie.overview, 120)}
            </p>
            <div className={classnames(classes.actionContainer)}>
                <Button name={movie.title} action={action} mood={movie.selected ? 'secondary' : 'primary'}
                        text={movie.selected ? "Remove" : "Add"}/>
            </div>
        </div>
    </div>
}