import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case RESET_LIST:
      return { ...state, people: data };
    case REMOVE_ITEM:
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return { ...state, people: newPeople };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
