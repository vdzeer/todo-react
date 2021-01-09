import React from 'react';
import './Todo.css';
import imgDone from './done.png';
import imgTrash from './trash.png';


function Todo({el, index, changeIsComplete, deleteTodo}) {
  return (
    <li className="todo-list__item">
      <div className="li-block">
        {
          el.isComplete ?
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
      </div>

      <img 
        className="dell-img" 
        src={imgTrash}
        alt="delete"
        onClick={() => deleteTodo(index)}
      />
    </li>
  )
}

export default Todo;