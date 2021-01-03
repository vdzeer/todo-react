import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Todo from './components/Todo/Todo';


function App() {
  const [todos, setTodos] = React.useState([
    {
      title: "Learn React js",
      isComplete: true
    },
    {
      title: "Finish todo-list",
      isComplete: false
    }
  ]);

  return (
    <div className="App">
      <Input setTodos={setTodos}/>
      <Todo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
