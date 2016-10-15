export interface MembershipsRemovePayload {
  key: string;
}
export interface MembershipsRemoveCommand {
  domain: "Memberships";
  action: "remove";
  uid: string;
  payload: MembershipsRemovePayload;
}