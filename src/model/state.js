import {MAX_X, MAX_Y, STARTING_LEVEL, STARTING_LINES, STARTING_SCORE} from "../constants/constants";
import {copy, create2dArray} from "../utils/arrayUtils";

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
        return new State(create2dArray(MAX_X,MAX_Y),STARTING_SCORE,null,null,null,
            STARTING_LINES,create2dArray(MAX_X,MAX_Y),STARTING_LEVEL);
    }
    static copy(state){
        return new State(copy(state.grid),state.score,state.shape,
            state.nextShape,state.holdShape,state.lines,copy(state.gutter),
            state.currentLevel)
    }
}