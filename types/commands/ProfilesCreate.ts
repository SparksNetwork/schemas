export interface ProfilesCreatePayload {
  values: {
    email: string;
    fullName?: string;
    intro?: string;
    phone?: string;
    portraitUrl?: string;
    skills?: string;
  };
}
export interface ProfilesCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ProfilesCreatePayload;
}