export interface ShiftsCreatePayload {
  values: {
    date: string;
    end: string;
    hours: number;
    people: number;
    reserved?: number;
    start: string;
    teamKey: string;
  };
}
export interface ShiftsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ShiftsCreatePayload;
}