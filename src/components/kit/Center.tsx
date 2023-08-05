import React from "react";
import classes from './Center.module.scss'

export default function Center(props: { children: any; width: string }) {
    return <div className={classes.center}>
        <div style={{width: `${props.width}px`}}>
            {props.children}</div>
    </div>
}