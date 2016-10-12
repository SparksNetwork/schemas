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
  domain: string;
  action: string;
  uid: string;
  payload: CommitmentsUpdatePayload;
}