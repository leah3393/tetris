import React from 'react';
import './shape.css';

export function Block(props) {
    let classes = (props.shape ? props.shape : "") + "block";
    return (<div className={classes}/>)
}