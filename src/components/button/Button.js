const Button = ({label}) => {
    const clickBtn = () => {
        alert('A label desse botão é ' + label)
    }
    return (
        <div>
            <button onClick={clickBtn}>{label}</button>
        </div>
    )
}

export default Button;