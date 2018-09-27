import React from 'react';
import {Layout} from "../layout/layout";
import {State} from "../model/state";
import {Shape} from "../model/shape";
import {MAX_X} from "../constants/constants";

export class GameController extends React.Component {
    render(){
        let state = State.getDefault();
        state.block = Shape.getShape("s");
        state.block = moveShapeDown(state.block);
        state.blockColors = addMovingShape(state.blockColors, state.block);

        return (
            <Layout state={state}/>
        )
    }
}

function addMovingShape(blockColors, block) {
    let {blockCoords, name} = block;
    blockCoords.forEach(c => blockColors[c] = name);
    return blockColors;
}
function moveShapeDown(block){
    block.blockCoords = block.blockCoords.map(c => c + MAX_X);
    return block;
}