export interface FulfillersCreatePayload {
  values: {
    oppKey: string;
    teamKey: string;
  };
}
export interface FulfillersCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: FulfillersCreatePayload;
}