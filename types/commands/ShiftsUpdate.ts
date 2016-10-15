export interface ShiftsUpdatePayload {
  key: string;
  values: {
    date?: string;
    end?: string;
    hours?: number;
    people?: number;
    reserved?: number;
    start?: string;
  };
}
export interface ShiftsUpdateCommand {
  domain: "Shifts";
  action: "update";
  uid: string;
  payload: ShiftsUpdatePayload;
}