export interface ProjectImagesCreatePayload {
  values: {
    key: string;
    dataUrl: string;
  };
}
export interface ProjectImagesCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ProjectImagesCreatePayload;
}