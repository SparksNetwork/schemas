export interface ProjectsUpdatePayload {
  key: string;
  values: {
    description?: string;
    facebookImageUrl?: string;
    name?: string;
  };
}
export interface ProjectsUpdateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ProjectsUpdatePayload;
}