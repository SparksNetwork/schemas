export interface EngagementsConfirmPayload {
  key: string;
}
export interface EngagementsConfirmCommand {
  domain: string;
  action: string;
  uid: string;
  payload: EngagementsConfirmPayload;
}