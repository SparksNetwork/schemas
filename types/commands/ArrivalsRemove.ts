export interface ArrivalsRemovePayload {
  key: string;
}
export interface ArrivalsRemoveCommand {
  domain: "Arrivals";
  action: "remove";
  uid: string;
  payload: ArrivalsRemovePayload;
}