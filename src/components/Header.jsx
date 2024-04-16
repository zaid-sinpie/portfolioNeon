export default function Header({children, name}){
    return(
        <header className={name}>
            {children}
        </header>
    )
}