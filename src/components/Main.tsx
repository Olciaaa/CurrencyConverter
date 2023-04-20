import { useEffect, useState } from 'react';
import Form from './Form';
import { ratesProvider } from '../services/ratesProvider';
import { formatPrice } from '../services/priceCalculations';
import '../styles/main.css';

const Main = (): JSX.Element => {
    const[rate, setRate] = useState<{value:number, rateReceived:boolean}>({
        value: 1,
        rateReceived: false
    });
    //const[flag, setRate] = useState(fals)

    useEffect(() => {
        ratesProvider()
            .then((res) => {
                setRate({value: res, rateReceived: true});
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    if(rate.rateReceived){
        return (
            <main>
                <Form rate = {rate.value}></Form>
                <p>
                    1 GBP = <b>{formatPrice(rate.value)} PLN</b>
                </p>
                <p>
                    <b>No transfer fee</b>
                </p>
            </main>
        );
    }
    return(
        <p>
            Failed to obtain currency exchange rate
        </p>
    )
    
};

export default Main;