import React, {Component} from 'react';
import ParentTree from './parentTree.component';
import ChildrenTree from './childrenTree.component';

export default class TreeEvolutionComponent extends Component {
    handleChildSelect = (childProps) => {

    }

    render() {
        return (
            <div className="trees-container">
                <ParentTree parentProps={this.props.parentProps} />
                <ChildrenTree arentProps={this.props.parentProps} />
            </div>
        );
    }
}