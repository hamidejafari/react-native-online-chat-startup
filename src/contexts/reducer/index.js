import {SET_ALL_EXPERTISES} from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_EXPERTISES:
      return {
        ...state,
        submit: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
