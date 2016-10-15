export interface OppsRemovePayload {
  key: string;
}
export interface OppsRemoveCommand {
  domain: "Opps";
  action: "remove";
  uid: string;
  payload: OppsRemovePayload;
}