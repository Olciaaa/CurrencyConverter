import React from 'react';
import inputProps from '../interfaces/inputProps';
import '../styles/formInput.css';

const FormInput: React.FC<inputProps> = (props: inputProps): JSX.Element => {
    const { value, inputCurrency: inputName, valueChange, currencyId: id, img} = props;

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        valueChange(id, event?.currentTarget.value)
    }

    return (
        <>
            <label>
                <img src={img} alt="flag" height={40} width={60}/>
                <input type="number" value = {value} step="0.01" name = {inputName} onChange={handleChange} />
            </label>
        </>
    );
};

export default FormInput;