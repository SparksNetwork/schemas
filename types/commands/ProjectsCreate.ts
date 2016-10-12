export interface ProjectsCreatePayload {
  values: {
    description?: string;
    facebookImageUrl?: string;
    name: string;
  };
}
export interface ProjectsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ProjectsCreatePayload;
}