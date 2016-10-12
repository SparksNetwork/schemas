export interface FulfillersRemovePayload {
  key: string;
}
export interface FulfillersRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: FulfillersRemovePayload;
}