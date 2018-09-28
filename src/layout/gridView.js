import React from 'react';
import {Block} from '../model/block'
import './layout.css'
import {MAX_X, MAX_Y} from "../constants/constants";

export class GridView extends React.Component {
    render(){
        return (
            <div className="main-window">
                {GridView.renderBlockGrid(this.props.blockColors)}
            </div>
        )
    }
    static renderBlockGrid(blockColors) {
        let blocks = [];
        for (let y = 0; y < MAX_Y; y++) {
            for(let x = 0; x < MAX_X; x++){
                let color = blockColors[x][y];
                if(color)
                    blocks.push(<Block shape={color + "-shape "}/>);
                else
                    blocks.push(<Block/>);
            }
        }
        return blocks;
    }
}