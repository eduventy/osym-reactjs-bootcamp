'use client'
import {useState} from 'react'
import styles from './form.module.css'

export default function TodoForm({handleAddTodo}){

    const [formData, setFormData] = useState({
        text: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTodo(formData.text)
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