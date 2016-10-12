export interface AssignmentsUpdatePayload {
  key: string;
  values: {
    engagementKey?: string;
    oppKey?: string;
    profileKey?: string;
    shiftKey?: string;
    teamKey?: string;
  };
}
export interface AssignmentsUpdateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: AssignmentsUpdatePayload;
}