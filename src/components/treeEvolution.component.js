import React, { Component } from 'react';

export default class TreeEvolutionComponent extends Component {

    render() {
        return (
            <div className="">
                <TreeParent parentProps={this.props.parentProps} />
                <TreeChildern />
            </div>
        );
    }
}