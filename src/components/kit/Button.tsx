import {ButtonType} from './Button.types'
import classnames from "classnames";
import classes from './Button.module.scss';

export default function Button(props: ButtonType) {
    const {name, action, text, mood} = props;
    const className = classnames(classes.button, mood ? classes[mood] : undefined);
    return <button aria-label={name} className={className}
                   onClick={() => action()}>
        {text}
    </button>
}

Button.defaultProps = {
    mood: 'primary',
}