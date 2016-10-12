export interface EngagementsPayPayload {
  key: string;
  values: {
    paymentNonce: string;
  };
}
export interface EngagementsPayCommand {
  domain: string;
  action: string;
  uid: string;
  payload: EngagementsPayPayload;
}