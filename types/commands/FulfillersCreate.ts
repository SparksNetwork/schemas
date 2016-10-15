export interface FulfillersCreatePayload {
  values: {
    oppKey: string;
    teamKey: string;
  };
}
export interface FulfillersCreateCommand {
  domain: "Fulfillers";
  action: "create";
  uid: string;
  payload: FulfillersCreatePayload;
}