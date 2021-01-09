import React from 'react';
import './Input.css';

function Input({setTodos}) {
  const addTodo = () => {
    const inputTitle = document.querySelector('.input').value;

    if (inputTitle === '') return alert('Input todo!');

    document.querySelector('.input').value = '';

    const newTodo = {
      title: inputTitle,
      isComplete: false
    }

    setTodos((todos) => [...todos, newTodo]);
  }
  
  return (
    <div className="inputField">
      <input className="input" placeholder="Input todos..."/>
      <button className="input-btn" onClick={addTodo}>+</button>
    </div>
  );
}

export default Input;
