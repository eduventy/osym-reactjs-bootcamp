export default function Button({children, type='submit', className,isDisabled, onClick}){
    return <button type={type} 
    className={...className} 
    disabled={isDisabled} 
    onClick={()=>{
        onClick()
    }}>{children}</button>
}