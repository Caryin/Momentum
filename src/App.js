import React, { useState } from 'react';

//css
import './App.css';

//components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Time from './components/Time';
import Quote from './components/Quote';

const App = () => {
  const [list, setList] = useState([]);
  const [clearTask, setClearTask] = useState();

  return (
    <div className={'main'}>
      <Time />
      {list.length === 0 && <TodoForm list={list} setList={setList} />}
      <br />
      <TodoList
        list={list}
        setList={setList}
        clearTask={clearTask}
        setClearTask={setClearTask}
      />
      <div>
        <Quote />
      </div>
    </div>
  );
};

export default App;
