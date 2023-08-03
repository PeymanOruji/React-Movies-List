import {ButtonType} from './Button.types'
import classes from './Button.module.scss';

export default function Button(props: ButtonType) {
    const {action, text} = props;
    return <button className={classes.button} onClick={() => action()}>
        {text}
    </button>
}