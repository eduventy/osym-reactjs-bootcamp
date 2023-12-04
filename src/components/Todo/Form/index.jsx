'use client'
import {useState} from 'react'
import { useDispatch } from 'react-redux'

import { addTask, loadTask } from '@/redux/slice/TodoSlice'


import styles from './form.module.css'

export default function TodoForm(){

    const [formData, setFormData] = useState({
        task: '',
        status: 'todo'
    })

    const dispatch = useDispatch()

    const getTasks = () => {
        const url = 'https://kokpit.smartlimon.com/items/bootcamp_todo'
        fetch(url)
        .then(resp=>resp.json())
        .then(resp=>{
            dispatch(loadTask(resp.data))
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        

        const url = 'https://kokpit.smartlimon.com/items/bootcamp_todo'

        fetch(url,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                task: formData.task
            })
        })
        .then(resp=>resp.json())
        .then(resp=>{
            
            dispatch(addTask(resp.data))
            //getTasks()
            setFormData({
                task:''
            })

        })
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <input type={'text'} 
        onChange={(e)=>{
            setFormData({
                task: e.target.value
            })
        }}
        value={formData.task}
        placeholder={'Type your task'} />
        <button>Add</button>
    </form>
}