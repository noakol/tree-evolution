import {connect} from 'react-redux';
import TreeEvolutionComponent from './treeEvolution.component';
import api from '../treeEvolution.api';

const mapStateToProps = () => {
    return {
        parentProps: api.getParentProps()
    };
};

const mapDispatchTpProps = (dispatch) => {
    return {
        loadMovies: async (params) => {
            movieExpApi.setLoaderUp()
            try {
                await dispatch(movieExpApi.loadMovies(params));
            } finally {
                movieExpApi.setLoaderDown();
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchTpProps)(TreeEvolutionComponent);