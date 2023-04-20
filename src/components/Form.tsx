import { useState } from 'react';
import formData from '../interfaces/formData';
import FormInput from './FormInput';
import { formatPrice, multiplier } from '../services/priceCalculations';
import Currency from '../interfaces/currency';

const Form: React.FC<{rate: number}> = (props: {rate: number}): JSX.Element => {
    const {rate} = props;
    const plnImg = require('../images/pln.png'); 
    const gbpImg = require('../images/gbp.png'); 
    const [data, setData] = useState<formData>({
        valueInCurrency1: "",
        valueInCurrency2: ""
    });

    const valueChange = (currencyId:number, value:string) => {
        setData((prevData) => ({...prevData, [`valueInCurrency${currencyId}`]: value, 
                                [`valueInCurrency${currencyId === Currency.PLN ? Currency.GBP : Currency.PLN}`]: formatPrice(multiplier(currencyId, +value, rate))}))
    }
    
    return (
        <>
            <form data-testid = "convertingForm">
                <FormInput img = {plnImg} currencyId={Currency.PLN} value = {data.valueInCurrency1} inputCurrency = {Currency[Currency.PLN]} valueChange = {valueChange}/>
                <FormInput img = {gbpImg} currencyId={Currency.GBP} value = {data.valueInCurrency2} inputCurrency = {Currency[Currency.GBP]} valueChange = {valueChange}/>
            </form>
        </>
    );
};

export default Form;