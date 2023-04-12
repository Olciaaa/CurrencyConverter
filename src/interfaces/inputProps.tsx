interface inputProps{
    value: string,
    valueChange: (currencyId: number, value: string) => void,
    inputCurrency:string,
    currencyId: number,
    img: string
}

export default inputProps