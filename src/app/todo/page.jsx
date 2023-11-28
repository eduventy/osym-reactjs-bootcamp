'use client'

import {useState} from 'react'
import {Todo} from '@/components'

import styles from './todo.module.css'

export default function TodoApp(){

    return <div className={styles.container}>
    <Todo.Form/>
    <Todo.List/>
    <Todo.Filters />
    </div>
}