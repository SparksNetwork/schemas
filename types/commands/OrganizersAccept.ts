export interface OrganizersAcceptPayload {
  key: string;
}
export interface OrganizersAcceptCommand {
  domain: "Organizers";
  action: "accept";
  uid: string;
  payload: OrganizersAcceptPayload;
}