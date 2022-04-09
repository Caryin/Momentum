import React from 'react';

//components
import classes from './TodoList.module.css';

const TodoList = (props) => {
  const checkboxHandler = (todo) => {
    let newList = [{ ...props.list[0], isDone: !props.list[0].isDone }];
    props.setList(newList);
  };

  const clearTaskHandler = () => {
    props.setList([]);
    localStorage.removeItem('Task');
  };

  return (
    <div>
      {props.list.map((todo) => {
        const isChecked = todo.isDone ? 'checked' : 'un-check';

        return (
          <ul className={classes.list} key={todo.id}>
            <h1>TODAY</h1>
            <input
              type='checkbox'
              checked={todo.isDone}
              onChange={() => checkboxHandler(todo)}
            />
            <label className={classes[isChecked]}>{todo.title}</label>
            <button type='button' onClick={clearTaskHandler}>
              x
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoList;
