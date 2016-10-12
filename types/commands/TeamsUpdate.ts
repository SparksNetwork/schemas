export interface TeamsUpdatePayload {
  key: string;
  values: {
    description?: string;
    name?: string;
    question?: string;
  };
}
export interface TeamsUpdateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: TeamsUpdatePayload;
}