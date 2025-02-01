import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and veggies',
        'Walk the dog'
    ]

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <li className='todoItem' key={todoIndex}>{todo}</li>
            )
        })}
    </ul>
  )
}
