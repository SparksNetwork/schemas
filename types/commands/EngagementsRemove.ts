export interface EngagementsRemovePayload {
  key: string;
}
export interface EngagementsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: EngagementsRemovePayload;
}