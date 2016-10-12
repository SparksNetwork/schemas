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
