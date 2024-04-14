export default function Buttons({children, name, select, type, id='undefined'}){
    return (
        <button className={name} onClick={select} id={id}>
            {children}
        </button>
    )
}