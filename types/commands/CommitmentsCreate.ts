export interface CommitmentsCreatePayload {
  values: {
    code: string;
    oppKey: string;
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
export interface CommitmentsCreateCommand {
  domain: "Commitments";
  action: "create";
  uid: string;
  payload: CommitmentsCreatePayload;
}