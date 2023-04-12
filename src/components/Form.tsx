import { useEffect, useState } from 'react';
import formData from '../interfaces/formData';
import FormInput from './FormInput';
import { ratesProvider } from '../services/ratesProvider';

const Form = (): JSX.Element => {
    const currency1: string = "pln";
    const currency2: string = "gbp";
    const [rate, setRate] = useState(1);
    const [data, setData] = useState<formData>({
        valueInCurrency1: "",
        valueInCurrency2: ""
    });

    useEffect(() => {
        ratesProvider()
            .then((res) => {
                setRate(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const roundPrice = (price: number): string => {
        const priceRounded: number = Math.round( price * 100) / 100;
        const dec: string = priceRounded.toString().split('.')[1]
        const len: number = dec && dec.length > 2 ? dec.length : 2
        return priceRounded.toFixed(len)
    }

    const multiplier = (currencyId:number, value:number): string => {
        const rateForSelectedCurrency :number = currencyId === 1?rate:(1/rate);
        return roundPrice( value * rateForSelectedCurrency);
    }

    const valueChange = (currencyId:number, value:string) => {
        setData((prevData) => ({...prevData, [`valueInCurrency${currencyId}`]: value, 
                                [`valueInCurrency${currencyId === 1?2:1}`]: multiplier(currencyId, +value)}))
    }
    
    return (
        <>
            <form>
                <FormInput currencyId={1} value = {data.valueInCurrency1} inputCurrency = {currency1} valueChange = {valueChange}/>
                <FormInput currencyId={2} value = {data.valueInCurrency2} inputCurrency = {currency2} valueChange = {valueChange}/>
            </form>
            <div>
                1 PLN = {roundPrice(rate)} GBP
            </div>
        </>
    );
};

export default Form;