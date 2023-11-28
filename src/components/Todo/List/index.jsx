import ListItem from './ListItem'
import styles from './list.module.css'

export default function TodoList({todos, setDone}){
   
    const items = todos.map((item,i)=>{
        return <ListItem key={'row_'+i} item={item} setDone={setDone} />
    })
    return <ul className={styles.list}>
        {items}
    </ul>
}