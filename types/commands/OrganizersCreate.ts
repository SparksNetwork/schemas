export interface OrganizersCreatePayload {
  values: {
    authority: "organizer";
    inviteEmail: string;
    projectKey: string;
  };
}
export interface OrganizersCreateCommand {
  domain: "Organizers";
  action: "create";
  uid: string;
  payload: OrganizersCreatePayload;
}