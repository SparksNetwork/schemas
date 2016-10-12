export interface AssignmentsRemovePayload {
  key: string;
}
export interface AssignmentsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: AssignmentsRemovePayload;
}