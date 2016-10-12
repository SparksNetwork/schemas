export interface ShiftsRemovePayload {
  key: string;
}
export interface ShiftsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ShiftsRemovePayload;
}