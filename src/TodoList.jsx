import React from 'react'

export default function TodoList() {
    let todos =[
        'Go to the Gym',
        'Eat more fruits',
        'Study'
    ]
    return(
        <ul className='main'>
            {todos.map((todo, TodoIndex) => {
                
                return(
                <li className='todoItem' key={TodoIndex}>
                    {todo}
                    <i className="fa-solid fa-pen-to-square"></i>
                </li>)
            
        })}
        </ul>
    )}
