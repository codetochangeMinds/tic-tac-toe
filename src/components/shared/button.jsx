import './styles.css'

function Button(props) {
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}

export default Button;