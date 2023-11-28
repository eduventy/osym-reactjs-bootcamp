'use client'
import {useState} from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '@/redux/slice/TodoSlice'


import styles from './form.module.css'

export default function TodoForm(){

    const [formData, setFormData] = useState({
        text: '',
        status: 'todo'
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(formData))
        setFormData({
            text:''
        })
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <input type={'text'} 
        onChange={(e)=>{
            setFormData({
                text: e.target.value
            })
        }}
        value={formData.text}
        placeholder={'Type your task'} />
        <button>Add</button>
    </form>
}