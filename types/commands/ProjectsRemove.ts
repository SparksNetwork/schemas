export interface ProjectsRemovePayload {
  key: string;
}
export interface ProjectsRemoveCommand {
  domain: "Projects";
  action: "remove";
  uid: string;
  payload: ProjectsRemovePayload;
}