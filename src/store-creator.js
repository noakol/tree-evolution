import { createStore, combineReducers } from 'redux';
import treeEvolutionReducer from './treeEvolution.reducer';

// const rootReducer = combineReducers({
//     loader: loaderReducer,
// });
  
const store = createStore(
    treeEvolutionReducer 
);

export default store;
