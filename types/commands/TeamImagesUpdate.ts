export interface TeamImagesUpdatePayload {
  key: string;
  values: {
    dataUrl: string;
  };
}
export interface TeamImagesUpdateCommand {
  domain: "TeamImages";
  action: "update";
  uid: string;
  payload: TeamImagesUpdatePayload;
}