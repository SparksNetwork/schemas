export interface OrganizersRemovePayload {
  key: string;
}
export interface OrganizersRemoveCommand {
  domain: "Organizers";
  action: "remove";
  uid: string;
  payload: OrganizersRemovePayload;
}