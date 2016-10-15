export interface ProfilesUpdatePayload {
  key: string;
  values: {
    email?: string;
    fullName?: string;
    intro?: string;
    phone?: string;
    portraitUrl?: string;
    skills?: string;
  };
}
export interface ProfilesUpdateCommand {
  domain: "Profiles";
  action: "update";
  uid: string;
  payload: ProfilesUpdatePayload;
}