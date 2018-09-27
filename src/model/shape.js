import React from 'react';
import './shape.css';
import {Block} from "./block";

export class StaticShape extends React.Component{
    render(){
        let name = this.props.name;
        if(name){
            return (
                <div className="shape">
                    <Block shape={this.props.name + "-shape "}/>
                    <Block shape={this.props.name + "-shape "}/>
                    <Block shape={this.props.name + "-shape "}/>
                    <Block shape={this.props.name + "-shape "}/>
                </div>
            )
        }else{
            return (<div/>)
        }
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
            console.log(index);
            shape = shapes[index];
        }
        return new Shape(shape.startingCoords,shape.name)
    }
}

let shapes = [
    {name:'i', startingCoords: [3,4,5,6]},
    {name:'o', startingCoords: [4,5,14,15]},
    {name:'l', startingCoords: [4,14,24,25]},
    {name:'j', startingCoords: [5,15,24,25]},
    {name:'t', startingCoords: [3,4,5,14]},
    {name:'z', startingCoords: [3,4,14,15]},
    {name:'s', startingCoords: [5,6,14,15]},
];