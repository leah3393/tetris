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
            let state = State.copy(prevState);
            if(!prevState.shape || prevState.shape == null){
                state.shape = Shape.getShape();
                state.grid = this.createGrid(state.shape,prevState.gutter);
            }else {
                let newShape = this.moveShapeDown(prevState.shape);
                if (!this.isValidMove(newShape.blockCoords,prevState.gutter)) {
                    state.shape = null;
                    state.gutter = this.createGrid(prevState.shape, prevState.gutter);
                    state.grid = state.gutter;
                }else{
                    state.shape = newShape;
                    state.grid = this.createGrid(newShape,prevState.gutter);
                }
            }
            return (state)
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
    isValidMove(newCoords,gutter){
        return (!newCoords.find(coord => gutter[coord]) &&
            !newCoords.find(b => b > MAX_TOTAL));
    }
    moveShapeDown(shape){
        let blockCoords = shape.blockCoords.map(c => c + MAX_X);
        return new Shape(blockCoords,shape.name);
    }
}