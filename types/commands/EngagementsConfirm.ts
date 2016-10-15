export interface EngagementsConfirmPayload {
  key: string;
}
export interface EngagementsConfirmCommand {
  domain: "Engagements";
  action: "confirm";
  uid: string;
  payload: EngagementsConfirmPayload;
}