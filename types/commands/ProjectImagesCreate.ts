export interface ProjectImagesCreatePayload {
  values: {
    key: string;
    dataUrl: string;
  };
}
export interface ProjectImagesCreateCommand {
  domain: "ProjectImages";
  action: "create";
  uid: string;
  payload: ProjectImagesCreatePayload;
}