export interface MembershipsUpdatePayload {
  key: string;
  values: {
    answer?: string;
    isAccepted?: boolean;
    isApplied?: boolean;
    isConfirmed?: boolean;
    isDeclined?: boolean;
  };
}
export interface MembershipsUpdateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: MembershipsUpdatePayload;
}