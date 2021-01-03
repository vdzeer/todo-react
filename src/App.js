import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Todo from './components/Todo/Todo';


function App() {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([
      {
        title: "Learn React js",
        isComplete: true
      },
      {
        title: "Finish todo-list",
        isComplete: false
      }
    ]));
  }
  console.log(localStorage.getItem('todos'));
  const [todos, setTodos] = 
    React.useState(JSON.parse(localStorage.getItem('todos')));

  return (
    <div className="App">
      <Input setTodos={setTodos}/>
      <Todo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
