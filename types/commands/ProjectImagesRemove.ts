export interface ProjectImagesRemovePayload {
  key: string;
}
export interface ProjectImagesRemoveCommand {
  domain: "ProjectImages";
  action: "remove";
  uid: string;
  payload: ProjectImagesRemovePayload;
}