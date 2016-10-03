export interface CreditCard {
    bin: number;
    cardType: string;
    commercial: string;
    countryOfIssuance: string;
    customerLocation: string;
    debit: string;
    durbinRegulated: string;
    expirationDate: string;
    expirationMonth: string;
    expirationYear: string;
    healthcare: string;
    imageUrl: string;
    issuingBank: string;
    last4: number;
    maskedNumber: string;
    payroll: string;
    prepaid: string;
    productId: string;
    venmoSdk: boolean;
}
