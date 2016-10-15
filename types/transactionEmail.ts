export interface TransactionEmail {
  templateId: string;
  fromEmail?: string;
  fromName?: string;
  toEmail: string;
  subject?: string;
  substitution?: Object;
}
