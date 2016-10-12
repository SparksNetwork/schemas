export interface MembershipsRemovePayload {
  key: string;
}
export interface MembershipsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: MembershipsRemovePayload;
}