'use client'
import Link from 'next/link'
import {useSession, signOut} from 'next-auth/react'


export default function Header(){

    const session = useSession()


    return <header>
        
        <Link href={'/'}>Anasayfa</Link>
              <Link href={'/volkan'}>Volkan</Link>
              <Link href={'/eduventy'}>Eduventy</Link>
              <Link href={'/todo'}>Todo</Link>
              
              <div className='auth'>

              {session.status==='unauthenticated' && <Link href={'/login'}>Login</Link> }
              {session.status==='authenticated' 
              && <>
               <span>
                {session?.data?.token?.name}
                </span> 
<button onClick={()=>{
                signOut()
              }}>Logout</button>
              </>}

              </div>
    </header>
}