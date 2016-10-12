export interface AssignmentsCreatePayload {
  values: {
    engagementKey: string;
    oppKey: string;
    profileKey: string;
    shiftKey: string;
    teamKey: string;
  };
}
export interface AssignmentsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: AssignmentsCreatePayload;
}