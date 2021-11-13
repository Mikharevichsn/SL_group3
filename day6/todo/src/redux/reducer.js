import { ADD_TASK, DELETE_TASK, CHANGE_TASK } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log('state = ', state);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        tasks: filteredTasks,
      };

    case CHANGE_TASK:
      const changedTasks = state.tasks.map((el) => {
        if (el.id === action.payload) {
          const elCopy = { ...el };
          elCopy.isDone = !elCopy.isDone;
          return elCopy;

          // return { ...el, isDone: true };
        }

        return el;
      });
      return {
        ...state,
        tasks: changedTasks,
      };

    default:
      return state;
  }
};

// action:
// {
//   type: 'ADD_TASK',
//   payload: ??? - полезная нагрузка
// }
