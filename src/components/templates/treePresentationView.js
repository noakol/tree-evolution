import React from 'react';
import Tree from './treeView';
import {createStyleFromProps} from '../treeEvolution.utils';

export default ({props}) => {
    return (
        <div className="tree-presentation-container">
            <h1>This is My tree!</h1>
            <Tree 
                treeProps={props} 
                {...createStyleFromProps(props)}
                containerClassName={"parent"}
            />
        </div>
    );
}