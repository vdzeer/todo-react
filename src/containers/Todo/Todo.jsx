import React from 'react';
import './Todo.css';
import Todo from '../../components/Todo/Todo';

function TodoContainer({todos, setTodos}) {
  const changeIsComplete = (ind) => {
    setTodos((prevTodos) => 
      prevTodos.map((el, index) => 
        index === ind ? 
          {
            ...el,
            isComplete: !el.isComplete
          } : el
      )
    )
  }

  const deleteTodo = (ind) => {
    setTodos((prevTodos) => 
      prevTodos.filter((el, index) => 
        index !== ind ? el : null
      )
    )
  }

  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <div className="todo">
      <ul className="todo-list">
        {
          todos.map((el, index) => 
            <Todo 
              el={el} 
              index={index} 
              key={index}
              changeIsComplete={changeIsComplete}
              deleteTodo={deleteTodo}
            />
          )
        }
      </ul>
    </div>
  );
}

export default TodoContainer;