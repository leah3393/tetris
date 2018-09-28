import React from 'react';
import './shape.css';

export class StaticShape extends React.Component{
    render(){
        return (<div/>)
    }
}

export class Shape {
    constructor(blockCoords, name){
        this.blockCoords = blockCoords;
        this.name = name;
    }
    static getShape(name){
        let shape = shapes.find(s => s.name===name);
        if(!shape){
            let index = Math.floor((Math.random()*shapes.length));
            shape = shapes[index];
        }
        return new Shape(shape.startingCoords,shape.name)
    }
}

let shapes = [
    {name:'i', startingCoords: [[3,0],[4,0],[5,0],[6,0]]},
    {name:'o', startingCoords: [[4,0],[5,0],[4,1],[5,1]]},
    {name:'l', startingCoords: [[4,0],[4,1],[4,2],[5,2]]},
    {name:'j', startingCoords: [[5,0],[5,1],[4,2],[5,2]]},
    {name:'t', startingCoords: [[3,0],[4,0],[5,0],[4,1]]},
    {name:'z', startingCoords: [[3,0],[4,0],[4,1],[5,1]]},
    {name:'s', startingCoords: [[5,0],[6,0],[4,1],[5,1]]},
];