import React from 'react'
import Todo from './Todo';
const TodoLists = (props) => {
  return (
    <div className='flex w-5/6 justify-self-center'>
      <ul className='flex-1 m-2 p-2  self-center bg-zinc-200 rounded-lg'>
        {props.todos.map((todo)=>(
        <Todo
        key={todo.id}
        id={todo.id}
        subject= {todo.subject}
        description={todo.description}
        />
        ))}
      </ul>
    </div>
  )
}

export default TodoLists;
