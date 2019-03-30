import {connect} from 'react-redux';
import TreeEvolutionComponent from './treeEvolution.component';
import treeEvolutionApi from '../api/treeEvolution.api';
import store from '../api/store-creator';

const api = new treeEvolutionApi(store);

const mapStateToProps = () => {
    return {
        parentProps: api.getParentProps(),
        mode: api.getViewMode()
    };
};

const mapDispatchTpProps = () => {
    return {
        setSelectedTree: (treeProps) => {
            api.updateSelectedTree(treeProps);
        },
        updateSelectedTreeFromUrl: () => {
            api.updateSelectedTreeFromUrl()
        },
        setInitialState: () => {
            api.setInitialState()
        }
    };
}

export default connect(mapStateToProps, mapDispatchTpProps)(TreeEvolutionComponent);