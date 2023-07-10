import { useState } from 'react';
import './styles.css'

function Button(props) {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button className="square" onClick={handleClick}>{value}</button>
    )
}

export default Button;