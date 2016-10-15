export interface OppsUpdatePayload {
  key: string;
  values: {
    confirmationsOn?: boolean;
    description?: string;
    isPublic?: boolean;
    name?: string;
    question?: string;
  };
}
export interface OppsUpdateCommand {
  domain: "Opps";
  action: "update";
  uid: string;
  payload: OppsUpdatePayload;
}