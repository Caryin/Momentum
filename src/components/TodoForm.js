import { useState } from 'react';

//CSS
import classes from './TodoForm.module.css';

const initialState = {
  id: Math.random(),
  title: '',
  isDone: false,
};

const TodoForm = (props) => {
  const [todo, setTodo] = useState(initialState);

  const todoInputHandler = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    props.setList([...props.list, todo]);
    setTodo(initialState);

    localStorage.setItem('Task', todo.title);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <span>Good day.</span>
        <h1>What is your main focus for today?</h1>
        <input value={todo.title} onChange={todoInputHandler} />
      </form>
    </div>
  );
};

export default TodoForm;
