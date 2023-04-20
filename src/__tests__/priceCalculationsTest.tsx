import { multiplier, formatPrice } from '../services/priceCalculations';
import Currency from '../interfaces/currency';

test('1. formatPrice works', () => {
    const value1: string = formatPrice(1.00);
    const value2: string = formatPrice(1);
    const value3: string = formatPrice(1.000000);
    const value4: string = formatPrice(-1.000000);
    const value5: string = formatPrice(1.059);
    
    expect(value1).toBe("1.00");
    expect(value2).toBe("1.00");
    expect(value3).toBe("1.00");
    expect(value4).toBe("-1.00");
    expect(value5).toBe("1.06");
})

test('2. multiplier calculates values', () => {
    const value1: number = multiplier(Currency.PLN, 20, 5);
    const value2: number = multiplier(Currency.PLN, 0, 5);
    const value3: number = multiplier(Currency.GBP, 20, 5);
    
    expect(value1).toBe(4);
    expect(value2).toBe(0);
    expect(value3).toBe(100);
})

test('3. multiplier returnes NaN for rate 0', () => {
    const value1: number = multiplier(Currency.PLN, 20, 0);
    const value2: number = multiplier(Currency.PLN, 0, 0);
    
    expect(value1).toBe(NaN);
    expect(value2).toBe(NaN);
})