export interface Commitment {
  code: string;
  oppKey: string;
  count?: number;
  description?: string;
  allocationRule?: string;
  amount?: number;
  party?: string;
  who?: string;
  ticketType?: string;
  retailValue?: number;
  what?: string;
  minLength?: number;
  maxLength?: number;
}

export interface PaymentCommitment {
  oppKey: string;
  code: 'payment';
  amount: number;
}

export interface DepositCommitment {
  oppKey: string;
  code: 'deposit';
  amount: number;
}