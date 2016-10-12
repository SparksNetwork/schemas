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
  domain: string;
  action: string;
  uid: string;
  payload: ShiftsUpdatePayload;
}