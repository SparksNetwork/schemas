export interface ShiftsRemovePayload {
  key: string;
}
export interface ShiftsRemoveCommand {
  domain: "Shifts";
  action: "remove";
  uid: string;
  payload: ShiftsRemovePayload;
}