import { createStore, combineReducers } from 'redux';
import loaderReducer from './sdk/reducers/loader.reducer';
import movieReducer from './sdk/reducers/movie.reducer';

const rootReducer = combineReducers({
    loader: loaderReducer,
    movies: movieReducer
});
  
const store = createStore(
    rootReducer, 
);

export default store;
