export interface Data {
  domain: string;
  action: "create" | "update" | "remove";
  key: string;
  values?: Object;
}
