import {useDispatch} from 'react-redux'
import {doneTask} from '@/redux/slice/TodoSlice'

import styles from './listItem.module.css'

export default function ListItem({item}){

    const dispatch = useDispatch()


    return <li className={`${styles.listItem} ${item.status==='done'?styles.done:''}`}>

       <span>{item.text}</span>
        <div className={styles.buttons}>
            {item.status==='todo' && <button onClick={()=>{
                
                dispatch(doneTask(item))

            }} className={styles.doneButton}>Done</button>}
        
            <button className={styles.deleteButton}>Delete</button>
        </div>
    </li>
}