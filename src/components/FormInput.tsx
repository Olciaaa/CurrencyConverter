import React from 'react';
import inputProps from '../interfaces/inputProps';

const FormInput: React.FC<inputProps> = (props: inputProps): JSX.Element => {
    const { value, inputCurrency: inputName, valueChange, currencyId: id} = props;

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        valueChange(id, event?.currentTarget.value)
    }

    return (
        <>
            <label>
                <input type="number" value = {value} step="0.01" name = {inputName} onChange={handleChange} />
            </label>
        </>
    );
};

export default FormInput;