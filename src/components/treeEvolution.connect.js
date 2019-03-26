import {connect} from 'react-redux';
import TreeEvolutionComponent from './treeEvolution.component';
import treeEvolutionApi from '../treeEvolution.api';
import store from '../store-creator';

const api = new treeEvolutionApi(store);

const mapStateToProps = () => {
    return {
        parentProps: api.getParentProps()
    };
};

const mapDispatchTpProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchTpProps)(TreeEvolutionComponent);