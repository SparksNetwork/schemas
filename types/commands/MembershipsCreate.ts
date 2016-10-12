export interface MembershipsCreatePayload {
  values: {
    answer: string;
    engagementKey: string;
    oppKey: string;
    teamKey: string;
  };
}
export interface MembershipsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: MembershipsCreatePayload;
}