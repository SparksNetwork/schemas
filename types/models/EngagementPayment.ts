export interface EngagementPayment {
  transactionId?: string;
  subscriptionId?: string;
  error: any;
  amountPaid?: string;
  paidAt?: number;
}
