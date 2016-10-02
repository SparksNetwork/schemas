export interface Engagement {
  $key:string
  answer:string
  assignmentCount:number
  declined:boolean
  isAccepted:boolean
  isApplied:boolean
  isAssigned:boolean
  isConfirmed:boolean
  isPaid:boolean
  oppKey:string
  payment: {
    clientToken:string
    gatewayId:string
    transactionId?:string
    subscriptionId?:string
    error?:boolean
    amountPaid?:string
    paidAt?:number
  }
  depositAmount?:string
  isDepositPaid?:boolean
  deposit?: {
    billingDate?:string
    paymentError?:string
  }
  paymentClientToken?:string // deprecated
  paymentError?:boolean // deprecated
  priority:boolean
  profileKey:string
}