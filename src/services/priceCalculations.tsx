const roundPrice = (price: number): string => {
    const priceRounded: number = Math.round( price * 100) / 100;
    const dec: string = priceRounded.toString().split('.')[1]
    const len: number = dec && dec.length > 2 ? dec.length : 2
    return priceRounded.toFixed(len)
}

export {roundPrice}