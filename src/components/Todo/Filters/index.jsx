import styles from './filters.module.css'
export default function Filters(){
    return <div className={styles.filters}>
        <label><input type={'radio'} /> All</label>
        <label><input type={'radio'} /> Todo</label>
        <label><input type={'radio'} /> Done</label>
    </div>
}