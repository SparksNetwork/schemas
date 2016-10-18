import {EngagementPayment} from './EngagementPayment';
export interface Deposit {
  billingDate?: string;
  paymentError?: string;
}
export interface Engagement {
  $key: string;
  answer: string;
  assignmentCount: number;
  declined: boolean;
  isAccepted: boolean;
  isApplied: boolean;
  isAssigned: boolean;
  isConfirmed: boolean;
  isPaid: boolean;
  oppKey: string;
  payment?: EngagementPayment;
  depositAmount?: string;
  isDepositPaid?: boolean;
  deposit?: Deposit;
  /**
   * deprecated
   */
  paymentClientToken?: string;
  /**
   * deprecated
   */
  paymentError?: boolean;
  priority: boolean;
  profileKey: string;
}
