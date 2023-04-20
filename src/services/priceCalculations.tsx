const formatPrice = (price: number): string => {
    const priceRounded: number = Math.round(price * 100) / 100;
    const dec: string = priceRounded.toString().split('.')[1]
    const len: number = dec && dec.length > 2 ? dec.length : 2

    return priceRounded.toFixed(len)
}

const multiplier = (currencyId: number, value: number, rate: number): number => {
    if (rate === 0) {
        return NaN;
    }

    const rateForSelectedCurrency: number = currencyId === 1 ? (1 / rate) : rate;
    return value * rateForSelectedCurrency;
}

export {formatPrice, multiplier}