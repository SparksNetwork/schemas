export interface ArrivalsCreatePayload {
  values: {
    profileKey: string;
    projectKey: string;
  };
}
export interface ArrivalsCreateCommand {
  domain: "Arrivals";
  action: "create";
  uid: string;
  payload: ArrivalsCreatePayload;
}