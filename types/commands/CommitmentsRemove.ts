export interface CommitmentsRemovePayload {
  key: string;
}
export interface CommitmentsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: CommitmentsRemovePayload;
}