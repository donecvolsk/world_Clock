
export function Button({style, name, type, fn}) {
    return (
        <button className={style} type={type} onClick={fn} >{name}</button>
    )
}