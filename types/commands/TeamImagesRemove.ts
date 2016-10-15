export interface TeamImagesRemovePayload {
  key: string;
}
export interface TeamImagesRemoveCommand {
  domain: "TeamImages";
  action: "remove";
  uid: string;
  payload: TeamImagesRemovePayload;
}