import React, { useEffect, useState } from 'react';
import formData from '../interfaces/formData';
import FormInput from './FormInput';

const Form = ({...props}) => {
    const currency1:string = "pln";
    const currency2:string = "gbp";

    const formData:formData = {
        currentCurrency: "",
        valueInCurrency1: "",
        valueInCurrency2: ""
    };
    const [data, setData] = useState(formData);

    useEffect(() => {
        if(data) {
            console.log("effect");
        }
    }, [data])

    let valueChangeForCurrency1 = (value:string)=>{
        setData({...data, currentCurrency: currency1, valueInCurrency1: value});
    }
    
    let valueChangeForCurrency2 = (value:string)=>{
        setData({...data, currentCurrency: currency2, valueInCurrency2: value});
    }

    return (
        <div>
            <form>
                <FormInput value = {data.valueInCurrency1} inputCurrency = {currency1} valueChange = {valueChangeForCurrency1}/>
                <FormInput value = {data.valueInCurrency2} inputCurrency = {currency2} valueChange = {valueChangeForCurrency2}/>
            </form>
        </div>
    );
};

export default Form;