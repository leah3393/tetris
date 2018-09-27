import {MAX_TOTAL, STARTING_LEVEL, STARTING_LINES, STARTING_SCORE} from "../constants/constants";

export class State {
    constructor(blockColors,score,block,nextBlock,holdBlock,lines,currentLevel){
        this.blockColors = blockColors;
        this.score = score;
        this.block = block;
        this.nextBlock = nextBlock;
        this.holdBlock = holdBlock;
        this.lines = lines;
        this.currentLevel = currentLevel;
    }
    static getDefault(){
        let blockColors = Array(MAX_TOTAL).fill(null);
        return new State(blockColors,STARTING_SCORE,null,null,null,STARTING_LINES,STARTING_LEVEL);
    }
}