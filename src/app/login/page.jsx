'use client'
import { useState, useEffect } from "react"
import {signIn, useSession} from 'next-auth/react'
import {redirect} from 'next/navigation'

export default function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        error: false
    })
    const session = useSession()

    const doSubmit = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            error:false
        })
        
        
        const login = signIn(
            'credentials',
            {
            ...formData,
            redirect:false
        }).then(resp=>{

            if (!resp.ok){
                setFormData({
                    ...formData,
                    error: true
                })
            } 
        })

        console.log(login)
    }

    useEffect(()=>{
        if (session.status==='authenticated'){
            redirect('/')
        }
    },[session])

  return (
    <form onSubmit={doSubmit}>
        {formData.error && <div>HATALI GİRİŞ</div>}
        <div>
            <input type={'text'} placeholder='Username' onChange={e=>{
                setFormData({
                    ...formData,
                    username: e.target.value
                })
            }} />
            </div>
            
        <div>
            <input type={'password'} placeholder={'Password'} onChange={e=>{
                setFormData({
                    ...formData,
                    password: e.target.value
                })
            }} />
            </div>
            
        <div>
            <button>Login</button>
        </div>
    </form>
  )
}
