import {getServerSession} from 'next-auth'
import AuthOptions from '@/utils/AuthOptions'

export default async function Eduventy() {

  const session = await getServerSession(AuthOptions)

  console.log('SESS', session)

  return (
    <div>Eduventy</div>
  )
}
