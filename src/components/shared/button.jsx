import './styles.css'

function Button(props) {
    return (
        <button className="square">{props.value}</button>
    )
}

export default Button;