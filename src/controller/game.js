import React from 'react';
import {Layout} from "../layout/layout";
import {State} from "../model/state";
import {Shape} from "../model/shape";
import {MAX_X, MAX_Y, MIN_X, MIN_Y, X, Y} from "../constants/constants";
import {copy} from "../utils/arrayUtils";

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
                if (this.invalidMove(newShape.blockCoords,prevState.gutter)) {
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
        let blockColors = copy(gutter);
        let {blockCoords, name} = shape;
        blockCoords.forEach(coord => {
            blockColors[coord[X]][coord[Y]] = name;
        });
        return blockColors;
    }
    invalidMove(newCoords, gutter){
        return (newCoords.find(coord =>
                (coord[X] >= MAX_X) || (coord[X] < MIN_X) ||
                (coord[Y] >= MAX_Y) || (coord[Y] < MIN_Y) ||
                (gutter[coord[X]][coord[Y]])
            )
        );
    }
    moveShapeDown(shape){
        let blockCoords = shape.blockCoords.map(coord => [coord[X],coord[Y]+1]);
        return new Shape(blockCoords,shape.name);
    }
}