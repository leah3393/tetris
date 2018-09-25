import React from 'react';
import './shape.css';

export function Block(props) {
    return (<div className={props.shape + "-shape block"}/>)
}

class Shape extends React.Component{
    render(){
        return (
            <div className="shape">
                <Block shape={this.props.name}/>
                <Block shape={this.props.name}/>
                <Block shape={this.props.name}/>
                <Block shape={this.props.name}/>
            </div>
        )
    }
}

export default Shape
