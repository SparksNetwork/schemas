export interface OrganizerInviteEmail {
  fromEmail?: string;
  fromName?: string;
  toEmail: string;
  templateId: "a005f2a2-74b0-42f4-8ac6-46a4b137b7f1";
  substitutions: {
    project_name: string;
    inviteUrl: string;
  };
}