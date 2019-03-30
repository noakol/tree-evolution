import React, {Component} from 'react';
import Tree from './templates/treeView';
import {createStyleFromProps} from './treeEvolution.utils';

export default class ParentTreeComponent extends Component {
    render() {
        const {parentProps} = this.props;
        return (
            <Tree 
                treeProps={parentProps} 
                {...createStyleFromProps(parentProps)}
                containerClassName={"parent"}
            />
        );
    }
}