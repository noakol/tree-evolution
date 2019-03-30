import { createStore } from 'redux';
import treeEvolutionReducer from './treeEvolution.reducer';

const store = createStore(
    treeEvolutionReducer
);

export default store;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()