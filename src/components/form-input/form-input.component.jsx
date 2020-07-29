import React from 'react';

import './form-input.styles.scss';

const FormInput = ({label, handleInputChange, ...aditionalProps}) =>(
    <div className="form-input">
        <input onChange={handleInputChange} {...aditionalProps} />
        <label htmlFor="email" className={`${aditionalProps.value.length ? 'shrink' : ''}`}>{label}</label>
    </div>
);

export default FormInput;