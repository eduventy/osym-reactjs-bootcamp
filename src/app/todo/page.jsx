'use client'

import {useState} from 'react'
import {useSession, signOut} from 'next-auth/react'
import {redirect} from 'next/navigation'
import {Todo} from '@/components'

import styles from './todo.module.css'

export default function TodoApp(){

    const session = useSession()

    console.log(session)

    if (session.status==='loading'){
        return 'Yükleniyor....'
    } else if (session.status==='unauthenticated'){
        redirect('/login')
    }

    return <div className={styles.container}>
        <button onClick={()=>{
            signOut()
        }}>LogOut</button>
    <Todo.Form/>
    <Todo.List/>
    <Todo.Filters />
    </div>
}