import axios from 'axios';

const URL = "http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json";

const ratesProvider = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        axios.get(URL)
            .then((res) => {
                resolve(res.data.rates[0].mid);   
            })
            .catch((err) => {
                reject(err);
            })
    })
}


export { ratesProvider }