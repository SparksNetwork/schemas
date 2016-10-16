export interface TransactionEmail {
  fromEmail?: string;
  fromName?: string;
  toEmail: string;
  templateId: string;
  substitutions: {
    [key:string]:string;
  };
}
