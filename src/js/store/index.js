import { createStore } from 'redux';

const change_counter = (state = {}, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        count: state.count+1
      };
    case "DECREMENT":
      if (state.id !== action.id) {
        return state;
      }
      
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

let nextId = 0;
const counters = (state = [], action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return [...state, {id: nextId++, count: 0}];
    case "INCREMENT":
      return state.map(counter => change_counter(counter, action));
    case "DECREMENT":
      return state.map(counter => change_counter(counter, action));
    default:
      return state;
  }
}

export default createStore(counters);
