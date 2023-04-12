import { useEffect, useState } from 'react';
import Form from './Form';
import { ratesProvider } from '../services/ratesProvider';
import { roundPrice } from '../services/priceCalculations';
import '../styles/main.css';

const Main = (): JSX.Element => {
    const[rate, setRate] = useState(1);

    useEffect(() => {
        ratesProvider()
            .then((res) => {
                setRate(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    return (
        <main>
            <Form rate = {rate}></Form>
            <p>
                1 GBP = <b>{roundPrice(rate)} PLN</b>
            </p>
            <p>
                <b>No transfer fee</b>
            </p>
        </main>
    );
};

export default Main;