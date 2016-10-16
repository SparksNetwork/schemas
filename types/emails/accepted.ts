export interface AcceptedEmail {
  fromEmail?: string;
  fromName?: string;
  toEmail: string;
  templateId: "dec62dab-bf8e-4000-975a-0ef6b264dafe";
  substitutions: {
    username: string;
    opp_name: string;
    project_name: string;
    engagementUrl: string;
  };
}