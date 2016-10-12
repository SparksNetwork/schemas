export interface TeamImagesUpdatePayload {
  key: string;
  values: {
    dataUrl: string;
  };
}
export interface TeamImagesUpdateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: TeamImagesUpdatePayload;
}