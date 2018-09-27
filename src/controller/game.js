import React from 'react';
import {Layout} from "../layout/layout";
import {State} from "../model/state";
import {Shape} from "../model/shape";
import {MAX_TOTAL, MAX_X} from "../constants/constants";

export class GameController extends React.Component {
    constructor(props){
        super(props);
        this.state = State.getDefault();
    }
    render(){
        return (<Layout state={this.state}/>)
    }
    paint(){
        this.setState(prevState => {
            let newShape = prevState.shape;
            if(!prevState.shape){
                newShape = Shape.getShape();
            }else{
                if(this.canMoveShapeDown(prevState.shape)) {
                    newShape = this.moveShapeDown(prevState.shape);
                }else{
                    newShape = Shape.getShape();
                }
            }
            let gutter = prevState.gutter;
            return ({
                shape: newShape,
                grid: this.createGrid(newShape,gutter),
                score: prevState.score,
                nextShape: prevState.nextShape,
                holdShape: prevState.holdShape,
                lines: prevState.lines,
                gutter: prevState.gutter,
                currentLevel: prevState.currentLevel
            })
        });
    }

    componentDidMount(){
        this.interval = setInterval(() => this.paint(),500);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    createGrid(shape, gutter) {
        let blockColors = gutter.slice();
        let {blockCoords, name} = shape;
        blockCoords.forEach(c => blockColors[c] = name);
        return blockColors;
    }
    canMoveShapeDown(shape){
        return !shape.blockCoords.find(b => b + MAX_X > MAX_TOTAL);
    }
    moveShapeDown(shape){
        shape.blockCoords = shape.blockCoords.map(c => c + MAX_X);
        return shape;
    }
}