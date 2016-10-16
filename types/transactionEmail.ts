export interface TransactionEmail {
  fromEmail?: string;
  fromName?: string;
  toEmail: string;
  [k: string]: any;
}
