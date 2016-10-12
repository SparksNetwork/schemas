export interface TeamsRemovePayload {
  key: string;
}
export interface TeamsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: TeamsRemovePayload;
}