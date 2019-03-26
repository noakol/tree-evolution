import React, {Component} from 'react';
import Tree from './templates/treeView';

export default class ParentTreeComponent extends Component {
    generateParentStyle() {
        const {parentProps} = this.props;
        return {
            treeStyle: {
                'background-color': parentProps.mainColor 
            },
            leafStyle: {
                'background-color': parentProps.mainColor 
            }
        };
    }

    render() {
        return (
            <Tree {...this.generateParentStyle()} />
        );
    }
}