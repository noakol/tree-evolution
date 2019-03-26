import React, {Component} from 'react';

export default class TreeEvolutionComponent extends Component {
    generateChildProps = (parenProps) => {
        const childrenProps = [];
        return parenProps.map((char) => {

        });
    }

    handleChildSelect = (childProps) => {

    }

    render() {
        return (
            <div>
                <ParentTree parenProps={parentProps}/>
                <TreeChildren childrenProps={childrenProps}/>
            </div>
        );
    }
}