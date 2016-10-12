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
  domain: string;
  action: string;
  uid: string;
  payload: OppsUpdatePayload;
}