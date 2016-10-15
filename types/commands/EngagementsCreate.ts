export interface EngagementsCreatePayload {
  values: {
    oppKey: string;
    profileKey: string;
  };
}
export interface EngagementsCreateCommand {
  domain: "Engagements";
  action: "create";
  uid: string;
  payload: EngagementsCreatePayload;
}