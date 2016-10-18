export interface UsersMigratePayload {
  fromUid: string;
  toUid: string;
  profileKey: string;
}
export interface UsersMigrateCommand {
  domain: "Users";
  action: "migrate";
  uid: string;
  payload: UsersMigratePayload;
}