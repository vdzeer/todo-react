import React from 'react';
import './Todo.css';
import imgDone from './done.png';
import imgTrash from './trash.png';


function Todo({todos, setTodos}) {
  const changeIsComplete = (ind) => {
    setTodos([
      ...todos.slice(0, ind), 
      {
        title: todos[ind].title,
        isComplete: !todos[ind].isComplete
      },
      ...todos.slice(ind + 1)
    ]);
  }

  const deleteTodo = (ind) => {
    setTodos([...todos.slice(0, ind), ...todos.slice(ind + 1)]);
  }

  return (
    <div className="todo">
      <ul className="todo-list">
        {
          todos.map((el, index) => {
            return (
              <li className="todo-list__item" key={index}>
                {el.isComplete ?
                <img 
                  className="dell-img" 
                  src={imgDone}
                  alt="delete"
                  onClick={() => changeIsComplete(index)}
                />
                :
                <button 
                  className="li-btn" 
                  onClick={() => changeIsComplete(index)}>
                </button>
                }

                <span className={
                el.isComplete ? 'isComplete' : ''}>
                  {el.title} 
                </span>

                <img 
                  className="dell-img" 
                  src={imgTrash}
                  alt="delete"
                  onClick={() => deleteTodo(index)}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Todo;