import React from "react";
import '../assets/stylesheets/textField.scss'

const TextField = props => {
    const { placeholder, value, handleChange, saveName } = props;
    return (
        <div className='wrapper'>
            <input
                className='field'
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={event => handleChange(event)}
                onKeyDown={event => saveName(event)}
            />
        </div>
    );
};

export default TextField;