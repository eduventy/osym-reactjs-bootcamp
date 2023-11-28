'use client'
import {useSelector, useDispatch} from 'react-redux'
import {increase, decrase} from '@/redux/slice/CounterSlice'

import styles from './page.module.css'

export default function Home() {

  const state = useSelector((state)=>state.counter)
npm
  const dispatch = useDispatch()

  return (
    <div className={styles.home}>
      Anasayfa - {state.count}

      <button onClick={()=>{
        dispatch(increase(5))
      }}>+</button>

      <button onClick={()=>{
        dispatch(decrase(3))
      }}>-</button>
    </div>
  )
}
