export interface EngagementsPayPayload {
  key: string;
  values: {
    paymentNonce: string;
  };
}
export interface EngagementsPayCommand {
  domain: "Engagements";
  action: "pay";
  uid: string;
  payload: EngagementsPayPayload;
}