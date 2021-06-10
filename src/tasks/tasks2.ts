export function sum(a: number, b: number) {
    return a + b
}

export function multiple(a: number, b: number) {
    return a * b
}

export function div(a: number, b: number) {
    return a / b
}

export function sub(a: number, b: number) {
    return a - b
}

export type ActionType = { type: 'sum' | 'multiple' | 'div' | 'sub' }

export function calculator(a: number, b: number, action: ActionType) {
    switch (action.type) {
        case 'sum':
            return a + b
        case "sub":
            return a - b
        case "div":
            return a / b
        case "multiple":
            return a * b
        default:
            return 'error of type action'
    }
}

