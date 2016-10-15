export interface CommitmentsRemovePayload {
  key: string;
}
export interface CommitmentsRemoveCommand {
  domain: "Commitments";
  action: "remove";
  uid: string;
  payload: CommitmentsRemovePayload;
}