export interface ProfilesUpdatePayload {
  key: string;
  values: {
    email?: string;
    fullName?: string;
    intro?: string;
    phone?: string;
    portraitUrl?: boolean;
    skills?: string;
  };
}
export interface ProfilesUpdateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ProfilesUpdatePayload;
}