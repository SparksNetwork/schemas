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
  domain: "Engagements";
  action: "update";
  uid: string;
  payload: EngagementsUpdatePayload;
}