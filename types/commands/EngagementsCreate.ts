export interface EngagementsCreatePayload {
  values: {
    oppKey: string;
    profileKey: string;
  };
}
export interface EngagementsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: EngagementsCreatePayload;
}