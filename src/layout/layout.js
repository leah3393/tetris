import React from 'react';
import {StaticShape} from '../model/shape'
import './layout.css'
import {Grid} from "./grid";

export class Layout extends React.Component {
    render(){
        return (
           <div className="game-board">
               <Grid blockColors={this.props.state.grid}/>
               <div className="right-window">
                   <div className="hold-block-window">
                       <StaticShape name={this.props.state.holdShape}/>
                   </div>
                   <div className="next-block-window">
                       <StaticShape name={this.props.state.nextShape}/>
                   </div>
                   <div className="current-level">
                       {"Level: "+this.props.state.currentLevel}
                   </div>
                   <div className="lines">
                       {"Lines: "+this.props.state.lines}
                   </div>
                   <div className="score">
                       {"Score: "+this.props.state.score}
                   </div>
               </div>
            </div>
        )
    }
}