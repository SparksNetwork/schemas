export interface ProjectImagesRemovePayload {
  key: string;
}
export interface ProjectImagesRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ProjectImagesRemovePayload;
}