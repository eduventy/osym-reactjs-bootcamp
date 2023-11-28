import styles from './listItem.module.css'

export default function ListItem({item, setDone}){
    return <li className={`${styles.listItem} ${item.status==='done'?styles.done:''}`}>

       <span>{item.text}</span>
        <div className={styles.buttons}>
            {item.status==='todo' && <button onClick={()=>{
                setDone(item)
            }} className={styles.doneButton}>Done</button>}
        
            <button className={styles.deleteButton}>Delete</button>
        </div>
    </li>
}