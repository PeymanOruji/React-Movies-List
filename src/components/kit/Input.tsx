import React from "react";
import {InputType} from './Input.types';
import classes from './Input.module.scss';

export default function Input(props: InputType) {
    const {type, placeholder, value, onChange} = props;
    return <div className={classes.wrapper}>
        <img className={classes.icon} src="/searchicon.png" alt="searchIcon"/>
        <input className={classes.input} type={type} placeholder={placeholder} onChange={(e) => onChange(e)}/>
    </div>
}

