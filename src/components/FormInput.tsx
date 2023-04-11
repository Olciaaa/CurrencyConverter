import React from 'react';

const FormInput = ({...props}) => {
    let handleChange = (event:any) => {
        props.valueChange(event?.target.value)
    }

    return (
        <label>
            <input type="number" value = {props.value} step="0.01" name = {props.inputCurrency} onChange={handleChange} />
        </label>
    );
};

export default FormInput;