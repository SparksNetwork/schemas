export interface OrganizersCreatePayload {
  values: {
    authority: string;
    inviteEmail: string;
    projectKey: string;
    acceptedAt?: number;
    isAccepted?: boolean;
    profileKey?: string;
  };
}
export interface OrganizersCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: OrganizersCreatePayload;
}