export interface EngagementsReclaimPayload {
  key: string;
}
export interface EngagementsReclaimCommand {
  domain: "Engagements";
  action: "reclaim";
  uid: string;
  payload: EngagementsReclaimPayload;
}