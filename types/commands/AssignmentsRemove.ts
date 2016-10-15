export interface AssignmentsRemovePayload {
  key: string;
}
export interface AssignmentsRemoveCommand {
  domain: "Assignments";
  action: "remove";
  uid: string;
  payload: AssignmentsRemovePayload;
}