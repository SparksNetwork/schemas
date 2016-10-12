export interface TeamImagesRemovePayload {
  key: string;
}
export interface TeamImagesRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: TeamImagesRemovePayload;
}