import React, {Component} from 'react';
import Tree from './templates/treeView';
import config from './treeEvolution.config';
import {generateChildProps} from './treeEvolution.utils';

export default class ChildrenTreeComponent extends Component {
    constructor(props) {
        super(props);
        this.config = config;
        this.childrenProps = this.generateChildrenProps()
    }

    generateChildrenProps() {
        const {parentProps} = this.props;
        const {numberOfChildren} = this.config;
        let index = numberOfChildren;
        const childrenProps = [];

        while (index) {
            childrenProps.push(generateChildProps(parentProps));
            index--;
        }

        return childrenProps;
    }

    generateStyle(props) {
        return {
            treeStyle: {
                'background-color': props.mainColor 
            },
            leafStyle: {
                'background-color': props.mainColor 
            }
        };
    }

    handleChildClick = () => {

    }

    render() {
        return (
            this.childrenProps && this.childrenProps.map((childProps, index) => {
                return (
                    <Tree 
                        {...this.generateStyle(childProps)}
                        handleChildClick={this.handleChildClick}
                        id={index}
                     />
                ); 
            })
        );
    }
}