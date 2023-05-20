import "./index.css";

import React from 'react'

const SimpleCombobox = ({options, onChange}) => {
    const handleComboBoxChange = (event) => {
        console.log( event.target.value )
        onChange(event.target.value);
    };


    return (
        <select className='simpleCombobox' 
            onChange={handleComboBoxChange}
        >
            {options.map(option => (
                <option
                    className={`simpleComboboxOption`}
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SimpleCombobox;