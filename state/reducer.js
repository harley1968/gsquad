import {v4 as uuidv4} from 'uuid';
import {TOGGLE_TODO, ADD_TODO, DELETE_TODO} from './actions';

export const initialTodos = [
  {
    id: uuidv4(),
    task: 'todo 1',
    complete: true,
  },
  {
    id: uuidv4(),
    task: 'todo 2',
    complete: true,
  },
  {
    id: uuidv4(),
    task: 'todo 3',
    complete: false,
  },
];
// set up todo reducer
export const todoReducer = (state, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case ADD_TODO:
      return state.concat({
        task: action.task,
        id: uuidv4(),
        complete: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, complete: !todo.complete};
        } else {
          return todo;
        }
      });
    default:
      throw new Error();
  }
};
