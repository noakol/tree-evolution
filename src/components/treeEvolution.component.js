import React, {Component} from 'react';
import ParentTree from './parentTree.component';
import ChildrenTree from './childrenTree.component';
import shareIcon from '../assets/share-icon.png';
import copy from 'copy-to-clipboard';
import config from './treeEvolution.config';
import TreePresentView from './templates/treePresentationView';

export default class TreeEvolutionComponent extends Component {
    componentDidMount() {
        window.onpopstate = () => {
            this.props.updateSelectedTreeFromUrl();
        };
        this.props.setInitialState();
    }

    handleShare = (e) => {
        const url = window.location.href + encodeURI('&mode=present');
        copy(url, {message: 'A link was coppied in to your clipbaord!'})
    }

    handleChildClick = (childProps) => {
        this.props.setSelectedTree(childProps);
    }

    getSelectionViewMarkup = () => {
        const {parentProps} = this.props;
        return (
            <div>
                <button className="share" onClick={this.handleShare} value={"bla"}>
                    <img src={shareIcon} alt="share" />
                </button>
                <div className="trees-container">
                    <ParentTree parentProps={parentProps} />
                    <ChildrenTree 
                        handleChildClick={this.handleChildClick}
                        parentProps={parentProps} />
                </div>
            </div>
        );
    }

    render() {
        const {mode, parentProps} = this.props;

        if (!parentProps) return null;

        return (
            mode === config.viewMode.present ?
            <TreePresentView props={parentProps} /> :
            this.getSelectionViewMarkup()
        );
    }
}