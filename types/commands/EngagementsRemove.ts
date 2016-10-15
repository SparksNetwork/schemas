export interface EngagementsRemovePayload {
  key: string;
}
export interface EngagementsRemoveCommand {
  domain: "Engagements";
  action: "remove";
  uid: string;
  payload: EngagementsRemovePayload;
}