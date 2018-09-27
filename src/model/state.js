import {MAX_TOTAL, STARTING_LEVEL, STARTING_LINES, STARTING_SCORE} from "../constants/constants";

export class State {
    constructor(grid,score,shape,nextShape,holdShape,lines,gutter,currentLevel){
        this.grid = grid;
        this.score = score;
        this.shape = shape;
        this.nextShape = nextShape;
        this.holdShape = holdShape;
        this.lines = lines;
        this.gutter = gutter;
        this.currentLevel = currentLevel;
    }
    static getDefault(){
        let grid = Array(MAX_TOTAL).fill(null);
        return new State(grid,STARTING_SCORE,null,null,null,STARTING_LINES,grid,STARTING_LEVEL);
    }
    static copy(state){
        return new State(state.grid.slice(),state.score,state.shape,
            state.nextShape,state.holdShape,state.lines,state.gutter.slice(),
            state.currentLevel)
    }
}