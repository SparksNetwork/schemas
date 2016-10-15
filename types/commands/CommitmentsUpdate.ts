export interface CommitmentsUpdatePayload {
  key: string;
  values: {
    count?: number;
    description?: string;
    allocationRule?: string;
    amount?: number;
    party?: string;
    who?: string;
    ticketType?: string;
    retailValue?: number;
    what?: string;
    minLength?: number;
    maxLength?: number;
  };
}
export interface CommitmentsUpdateCommand {
  domain: "Commitments";
  action: "update";
  uid: string;
  payload: CommitmentsUpdatePayload;
}