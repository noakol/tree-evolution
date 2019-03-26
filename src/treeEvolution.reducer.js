import actionTypes from './treeEvolution.actionTypes';
import initialState from './data';

export default function movie(state = {selectedTree: initialState}, action) {
  const {type, payload} = action;
    let newState;
    switch (type) {
      case actionTypes.SET_SELECT_TREE:
        newState = {
            ...state,
          selectedTree: payload
        };
        break;
      default:
        newState = state;
        break;
    }
    return newState;
};
