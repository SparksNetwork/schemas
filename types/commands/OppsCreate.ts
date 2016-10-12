export interface OppsCreatePayload {
  values: {
    confirmationsOn?: boolean;
    description?: string;
    isPublic?: boolean;
    name: string;
    projectKey: string;
    question?: string;
  };
}
export interface OppsCreateCommand {
  domain: string;
  action: string;
  uid: string;
  payload: OppsCreatePayload;
}