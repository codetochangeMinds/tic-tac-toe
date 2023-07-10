import { useState } from 'react'
import './style.css'


function Button(props) {
    const [value, setValue] = useState(null)

    const handleClick = () => {
        setValue('X')
    }
    return (
        <button className="square" onClick={handleClick}>{value}</button>
    )
}

export default Button;