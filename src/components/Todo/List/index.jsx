import {useSelector} from 'react-redux'

import ListItem from './ListItem'
import styles from './list.module.css'

export default function TodoList(){

    const todos = useSelector((state)=>state.todo)
   
    const items = todos.map((item,i)=>{
        return <ListItem key={'row_'+i} item={item} />
    })
    return <ul className={styles.list}>
        {items}
    </ul>
}