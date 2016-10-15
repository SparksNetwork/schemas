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
  domain: "Opps";
  action: "create";
  uid: string;
  payload: OppsCreatePayload;
}