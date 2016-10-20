export interface Notification {
  type: string;
  sendAt?: number;
  [k: string]: any;
}
