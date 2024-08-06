
export function Input({type, name, value, fun, placeholder}) {
    return(
        <input type={type} name={name} value={value} onChange={fun} placeholder={placeholder}></input>
    )
}