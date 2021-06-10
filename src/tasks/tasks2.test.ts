import {sum} from "./tasks";
import {calculator} from "./tasks2";

test('sum', () => {
    //1.test
    const a: number = 10
    const b: number = 5
    //2.выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)
    //3.проверка ожидаемого результата
    expect(result).toBe(15)
})

test('div', () => {
    //1.test
    const a: number = 10
    const b: number = 5
    //2.выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)
    //3.проверка ожидаемого результата
    expect(result).toBe(2)
})

test('multiple', () => {
    //1.test
    const a: number = 10
    const b: number = 5
    //2.выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)
    //3.проверка ожидаемого результата
    expect(result).toBe(50)
})

test('calculator', () => {
    const a: number = 10
    const b: number = 5
    expect(calculator(a, b, {type: 'sum'})).toBe(15)
    expect(calculator(a, b, {type: 'multiple'})).toBe(50)
    expect(calculator(a, b, {type: 'div'})).toBe(2)
    expect(calculator(a, b, {type: 'sub'})).toBe(5)
})



