export interface ProjectsCreatePayload {
  values: {
    description?: string;
    facebookImageUrl?: string;
    name: string;
  };
}
export interface ProjectsCreateCommand {
  domain: "Projects";
  action: "create";
  uid: string;
  payload: ProjectsCreatePayload;
}