'use client'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'

import {loadTask} from '@/redux/slice/TodoSlice'
import ListItem from './ListItem'
import styles from './list.module.css'

export default function TodoList(){

    const todos = useSelector((state)=>state.todo)

    const [isLoading, setLoading] = useState(false)

    const dispatch = useDispatch()

   useEffect(()=>{
    
    setLoading(true)
        const url = 'https://kokpit.smartlimon.com/items/bootcamp_todo'
        fetch(url)
        .then(resp=>resp.json())
        .then(resp=>{
            dispatch(loadTask(resp.data))
            setLoading(false)
        })

   },[])

   if (isLoading){
    return 'Sayfa Yükleniyor...'
   }
   
   console.log(todos)
    const items = todos.map((item,i)=>{
        return <ListItem key={'row_'+i} item={item} />
    })
    
    return <ul className={styles.list}>
        {items}
    </ul>
}