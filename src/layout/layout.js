import React from 'react';
import Shape from '../model/shape'
import '../styles.css'

export class Layout extends React.Component {
    render(){
        return (
           <div className="game-board">
                <div className="main-window"/>
                <div className="next-block-window">
                    <Shape name="i"/>
                    <Shape name="j"/>
                    <Shape name="t"/>
                    <Shape name="o"/>
                    <Shape name="l"/>
                    <Shape name="s"/>
                    <Shape name="z"/>
                </div>
                <div className="current-level"/>
                <div className="lines"/>
                <div className="score"/>
            </div>
        )
    }
}