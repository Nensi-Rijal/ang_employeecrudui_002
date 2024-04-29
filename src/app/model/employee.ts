export interface IEmployee {
    id: string
    cardholderName: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvc: number
}

export class Employee {
    id?:string;
    cardholderName?: string
    cardNumber?: string
    expiryMonth: number
    expiryYear: number
    cvc: number
    constructor() {
        this.id = undefined;
        this.cardholderName = undefined;
        this.cardNumber = undefined;
        this.expiryMonth = 0;
        this.expiryYear = 0;
        this.cvc = 0;
    }
}