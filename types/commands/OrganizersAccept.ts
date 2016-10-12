export interface OrganizersAcceptPayload {
  key: string;
}
export interface OrganizersAcceptCommand {
  domain: string;
  action: string;
  uid: string;
  payload: OrganizersAcceptPayload;
}