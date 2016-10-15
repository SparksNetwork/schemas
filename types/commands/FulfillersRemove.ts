export interface FulfillersRemovePayload {
  key: string;
}
export interface FulfillersRemoveCommand {
  domain: "Fulfillers";
  action: "remove";
  uid: string;
  payload: FulfillersRemovePayload;
}