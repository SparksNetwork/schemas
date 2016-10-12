export interface OppsRemovePayload {
  key: string;
}
export interface OppsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: OppsRemovePayload;
}