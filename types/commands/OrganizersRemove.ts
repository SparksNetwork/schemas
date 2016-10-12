export interface OrganizersRemovePayload {
  key: string;
}
export interface OrganizersRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: OrganizersRemovePayload;
}