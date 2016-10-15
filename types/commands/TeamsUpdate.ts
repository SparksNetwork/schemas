export interface TeamsUpdatePayload {
  key: string;
  values: {
    description?: string;
    name?: string;
    question?: string;
  };
}
export interface TeamsUpdateCommand {
  domain: "Teams";
  action: "update";
  uid: string;
  payload: TeamsUpdatePayload;
}