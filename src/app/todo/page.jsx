'use client'

import {useState} from 'react'
import {Todo} from '@/components'

import styles from './todo.module.css'

export default function TodoApp(){

    const [todos, setTodo] = useState([
        {text:'Kitap oku', status:'done'}
    ])

    const handleAddTodo = (text) => {
        setTodo([...todos, {text, status:'todo'}])
    }

    const setDone = (item)=>{


        todos.filter(todo=>todo.text===item.text ? todo.status = 'done' : true)

        console.log(todos)

        setTodo([...todos])

       /*console.log( todos.filter(a=>a.text===item.text) )

       console.log( todos.find(a=>a.text===item.text))*/
    }

    return <div className={styles.container}>
    <Todo.Form handleAddTodo={handleAddTodo} />
    <Todo.List todos={todos} setDone={setDone}/>
    <Todo.Filters />
    </div>
}