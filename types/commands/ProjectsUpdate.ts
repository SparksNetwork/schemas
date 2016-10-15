export interface ProjectsUpdatePayload {
  key: string;
  values: {
    description?: string;
    facebookImageUrl?: string;
    name?: string;
  };
}
export interface ProjectsUpdateCommand {
  domain: "Projects";
  action: "update";
  uid: string;
  payload: ProjectsUpdatePayload;
}