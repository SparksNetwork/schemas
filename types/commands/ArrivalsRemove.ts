export interface ArrivalsRemovePayload {
  key: string;
}
export interface ArrivalsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ArrivalsRemovePayload;
}