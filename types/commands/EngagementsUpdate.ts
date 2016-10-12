export interface EngagementsUpdatePayload {
  key: string;
  values: {
    oppKey?: string;
    answer?: string;
    declined?: boolean;
    isAccepted?: boolean;
    isApplied?: boolean;
    isAssigned?: boolean;
    priority?: boolean;
  };
}
export interface EngagementsUpdateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: EngagementsUpdatePayload;
}