import React, {PureComponent} from 'react';
import Tree from './templates/treeView';
import config from './treeEvolution.config';
import {generateChildProps, createStyleFromProps} from './treeEvolution.utils';

export default class ChildrenTreeComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.config = config;
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

    render() {
        const childrenProps = this.generateChildrenProps();
        return (
            <div className="children-container">
                {childrenProps.length && childrenProps.map((childProps, index) => {
                    return (
                        <div 
                            key={index} 
                            className="box-wrapper">
                            <Tree 
                                {...createStyleFromProps(childProps)}
                                handleTreeSelect={this.props.handleChildClick}
                                key={index}
                                treeProps={childProps}
                            />
                        </div>
                    ); 
                })}
            </div>
        );
    }
}