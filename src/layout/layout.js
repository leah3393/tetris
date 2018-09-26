import React from 'react';
import Shape, {Block} from '../model/shape'
import './layout.css'

export class Layout extends React.Component {
    render(){
        return (
           <div className="game-board">
               <div className="main-window">
                   {/*<Shape name="i"/>
                   <Shape name="j"/>
                   <Shape name="t"/>
                   <Shape name="o"/>
                   <Shape name="l"/>
                   <Shape name="s"/>
                   <Shape name="z"/>*/}
                   {Layout.renderBlockGrid(10,18)}
               </div>
               <div className="right-window">
                   <div className="hold-block-window">
                       <Shape name="z"/>
                   </div>
                   <div className="next-block-window">
                       <Shape name="z"/>
                   </div>
                   <div className="current-level"/>
                   <div className="lines"/>
                   <div className="score"/>
               </div>
            </div>
        )
    }
    static renderBlockGrid(maxX, maxY) {
        let blocks = [];
        let size = maxX*maxY;
        for (let i = 0; i < size; i++) {
            blocks.push(<Block/>);
        }
        return blocks;
    }
}