import React, { useState } from 'react';
import './index.css';

const Select = ({ options, onChangeHandler }) => {
    const [selectVal, setSelected] = useState(1)

    const onChangeClick = e => {
        setSelected(e.target.value)
        onChangeHandler(e.target.value);
    }

    return (
        <select
            value={options[selectVal]}
            className="select"
            onChange={e => onChangeClick(e)}>
            {options.map((option, id) => {
                return <option
                    key={options + id}
                    value={option}>
                    {option}
                </option>
            })}
        </select>
    )
}

export default Select;