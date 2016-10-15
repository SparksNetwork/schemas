export interface Email {
  templateId: string;
  fromEmail?: string;
  fromName?: string;
  toEmail: string;
  subject?: string;
  substitution?: Object;
}
