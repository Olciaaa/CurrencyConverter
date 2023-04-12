import { useState } from 'react';
import formData from '../interfaces/formData';
import FormInput from './FormInput';
import { roundPrice } from '../services/priceCalculations';

const Form: React.FC<{rate: number}> = (props: {rate: number}): JSX.Element => {
    const {rate} = props;
    const currency1: string = "pln";
    const currency2: string = "gbp";
    const plnImg = require('../images/pln.png'); 
    const gbpImg = require('../images/gbp.png'); 
    const [data, setData] = useState<formData>({
        valueInCurrency1: "",
        valueInCurrency2: ""
    });

    const multiplier = (currencyId:number, value:number): string => {
        const rateForSelectedCurrency :number = currencyId === 1?(1/rate):rate;
        return roundPrice( value * rateForSelectedCurrency);
    }

    const valueChange = (currencyId:number, value:string) => {
        setData((prevData) => ({...prevData, [`valueInCurrency${currencyId}`]: value, 
                                [`valueInCurrency${currencyId === 1?2:1}`]: multiplier(currencyId, +value)}))
    }
    
    return (
        <>
            <form>
                <FormInput img = {plnImg} currencyId={1} value = {data.valueInCurrency1} inputCurrency = {currency1} valueChange = {valueChange}/>
                <FormInput img = {gbpImg} currencyId={2} value = {data.valueInCurrency2} inputCurrency = {currency2} valueChange = {valueChange}/>
            </form>
        </>
    );
};

export default Form;