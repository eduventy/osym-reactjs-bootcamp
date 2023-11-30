'use client'
import {useSession} from 'next-auth/react'

export default function Volkan() {

  const session = useSession()

  console.log('SESS_CLIENT',session)

  return (
    <div>Volkan - Client</div>
  )
}
