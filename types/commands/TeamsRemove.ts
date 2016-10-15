export interface TeamsRemovePayload {
  key: string;
}
export interface TeamsRemoveCommand {
  domain: "Teams";
  action: "remove";
  uid: string;
  payload: TeamsRemovePayload;
}