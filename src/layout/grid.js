import React from 'react';
import {Block} from '../model/block'
import './layout.css'
import {MAX_TOTAL} from "../constants/constants";

export class Grid extends React.Component {
    render(){
        return (
            <div className="main-window">
                {Grid.renderBlockGrid(this.props.blockColors)}
            </div>
        )
    }
    static renderBlockGrid(blockColors) {
        let blocks = [];
        for (let i = 0; i < MAX_TOTAL; i++) {
            let color = blockColors[i];
            if(color)
                blocks.push(<Block shape={color + "-shape "}/>);
            else
                blocks.push(<Block/>);
        }
        return blocks;
    }
}