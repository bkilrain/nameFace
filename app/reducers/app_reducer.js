import {SELECT_DECK} from '../actions/actions_index';

const dashboard = (state = {}, action) => {
  switch (action.type) {
    case SELECT_DECK:
      return ;
    default: 
      return state;
  }
};

export default dashboard