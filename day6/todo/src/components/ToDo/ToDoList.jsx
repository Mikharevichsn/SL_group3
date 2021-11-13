import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskAction, changeTaskAction } from '../../redux/actions';

export const ToDoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasks);

  console.log('list = ', list);

  const btnDeleteTaskHandler = (id) => {
    console.log('delete! id = ', id);
    dispatch(deleteTaskAction(id));
  };

  const btnChangeTaskHandler = (id) => {
    dispatch(changeTaskAction(id));
  };

  return (
    <div>
      <ul>
        {list.map((task) => {
          return (
            <li
              key={task.id}
              // className={`task ${task.isDone ? 'task-done' : ''}`}
              className={cn('task', { 'task-done': task.isDone })}
            >
              {task.title}
              <button onClick={() => btnChangeTaskHandler(task.id)}>
                {task.isDone ? 'Вернуть' : 'Завершить'}
              </button>
              <button onClick={() => btnDeleteTaskHandler(task.id)}>
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
