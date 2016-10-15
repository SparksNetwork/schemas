export interface TeamsCreatePayload {
  values: {
    description?: string;
    name: string;
    projectKey: string;
    question?: string;
  };
}
export interface TeamsCreateCommand {
  domain: "Teams";
  action: "create";
  uid: string;
  payload: TeamsCreatePayload;
}