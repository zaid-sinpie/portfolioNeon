export default function BoxContent({children ,id = undefined}){
    return (
        <div className="content-box" id={id}>{children}</div>
    )
}