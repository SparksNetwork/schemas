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
  domain: "Assignments";
  action: "create";
  uid: string;
  payload: AssignmentsCreatePayload;
}