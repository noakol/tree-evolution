import actionTypes from './treeEvolution.actionTypes';

export default function movie(state = {}, action) {
  const {type, payload} = action;
    let newState;
    switch (type) {
      case actionTypes.SET_SELECT_TREE:
        newState = {
            ...state,
          selectedTree: payload
        };
        break;
      case actionTypes.SET_VIEW_MODE:
          newState = {
              ...state,
              mode: payload
          };
          break;
      case actionTypes.CLEAR_STATE:
          newState = {};
          break;
      default:
        newState = state;
        break;
    }
    return newState;
};
