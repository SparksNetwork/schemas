export interface TeamsCreatePayload {
  values: {
    description?: string;
    name: string;
    projectKey: string;
    question?: string;
  };
}
export interface TeamsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: TeamsCreatePayload;
}