export interface ArrivalsCreatePayload {
  values: {
    arrivedAt: number;
    profileKey: string;
    projectKey: string;
  };
}
export interface ArrivalsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ArrivalsCreatePayload;
}