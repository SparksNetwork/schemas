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
  domain: "Organizers";
  action: "create";
  uid: string;
  payload: OrganizersCreatePayload;
}