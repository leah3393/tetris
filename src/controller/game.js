import React, {Component} from 'react';
import {Layout} from "../layout/layout";
import {State} from "../model/state";
import {Shape} from "../model/shape";
import {MAX_X, MAX_Y, MIN_X, MIN_Y, X, Y} from "../constants/constants";
import {copy} from "../utils/arrayUtils";

export class GameController extends Component {
    constructor(props){
        super(props);
        this.state = State.getDefault();
    }
    render(){
        return (
            <div
                onKeyDown={(e) => this.handleKeyPress(e)}
                tabIndex="0"
            >
                <Layout state={this.state}/>
            </div>
        )
    }
    paint(){
        this.setState(prevState => {
            let state = State.copy(prevState);
            if(!prevState.shape){
                let newShape = Shape.getShape();
                if(!this.isGameOver(newShape,prevState.gutter)){
                    state.shape = newShape;
                    state.grid = this.createGrid(state.shape,prevState.gutter);
                }
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

    isGameOver(shape,gutter){
        return this.invalidMove(shape.blockCoords,gutter);
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

    handleKeyPress = (event) => {
        if(event.key === "ArrowDown"){
            this.moveDown();
        }else if(event.key === "ArrowLeft"){
            this.moveLeft();
        }else if(event.key === "ArrowRight"){
            this.moveRight();
        }else if(event.key === "ArrowUp"){
            this.rotate();
        }
    }
    moveDown() {
        console.log("moving down");
        this.move(0,1);
    }
    moveLeft() {
        console.log("moving left");
        this.move(-1,0);
    }
    moveRight() {
        console.log("moving right");
        this.move(1,0);
    }
    rotate(){
        console.log("rotating piece");

    }
    move(x,y){
        this.modify(c => [c[X] + x, c[Y] + y])
    }
    modify(modFunc){
        this.setState(prevState => {
            let state = State.copy(prevState);
            state.shape.blockCoords = prevState.shape.blockCoords.map(modFunc);
            if(this.invalidMove(state.shape.blockCoords,state.gutter)){
                state.shape = prevState.shape;
            }
            state.grid = this.createGrid(state.shape,prevState.gutter);
            return(state)
        });
    }

}