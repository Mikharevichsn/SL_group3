import React, { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../../redux/actions';

export const ToDoAddTask = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  console.log('inputText = ', inputText);

  const btnAddTaskHandler = () => {
    console.log('btnAddTaskHandler');

    // собрать задачу
    const task = {
      id: shortid.generate(),
      title: inputText,
      isDone: false,
    };

    console.log('task = ', task);

    // отправить в редакс
    // dispatch({
    //   type: 'ADD_TASK',
    //   payload: task,
    // });

    dispatch(addTaskAction(task));
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={btnAddTaskHandler}>Добавить задачу</button>
    </div>
  );
};
