import React from 'react';
import './shape.css';

export function Block(props) {
    let classes = (props.shape ? props.shape : "") + "block";
    return (<div className={classes}/>)
}

class Shape extends React.Component{
    render(){
        return (
            <div className="shape">
                <Block shape={this.props.name + "-shape "}/>
                <Block shape={this.props.name + "-shape "}/>
                <Block shape={this.props.name + "-shape "}/>
                <Block shape={this.props.name + "-shape "}/>
            </div>
        )
    }
}

export default Shape
