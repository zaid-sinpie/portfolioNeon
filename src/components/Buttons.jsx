export default function Buttons({children, name, select, id='undefined'}){
    return (
        <button className={name} onClick={select} id={id}>
            {children}
        </button>
    )
}