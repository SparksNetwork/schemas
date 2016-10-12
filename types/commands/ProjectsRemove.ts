export interface ProjectsRemovePayload {
  key: string;
}
export interface ProjectsRemoveCommand {
  domain: string;
  action: string;
  uid: string;
  payload: ProjectsRemovePayload;
}