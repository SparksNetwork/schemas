export interface MembershipsCreatePayload {
  values: {
    answer: string;
    engagementKey: string;
    oppKey: string;
    teamKey: string;
  };
}
export interface MembershipsCreateCommand {
  domain: "Memberships";
  action: "create";
  uid: string;
  payload: MembershipsCreatePayload;
}