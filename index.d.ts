declare module 'sparks-schemas/types/command' {
	export interface Command {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: any;
	}

}
declare module 'sparks-schemas/types/models/arrival' {
	export interface Arrival {
	    arrivedAt?: number;
	    ownerProfileKey: string;
	    profileKey: string;
	    projectKey: string;
	    projectKeyProfileKey?: string;
	}

}
declare module 'sparks-schemas/types/models/assignment' {
	export interface Assignment {
	    engagementKey: string;
	    oppKey: string;
	    profileKey: string;
	    shiftKey: string;
	    teamKey: string;
	}

}
declare module 'sparks-schemas/types/models/billing' {
	export interface Billing {
	    postalCode: number;
	}

}
declare module 'sparks-schemas/types/models/commitment' {
	export interface Commitment {
	    code: string;
	    oppKey: string;
	    count?: number;
	    description?: string;
	    allocationRule?: string;
	    amount?: number;
	    party?: string;
	    who?: string;
	    ticketType?: string;
	    retailValue?: number;
	    what?: string;
	    minLength?: number;
	    maxLength?: number;
	}

}
declare module 'sparks-schemas/types/models/creditcard' {
	export interface CreditCard {
	    bin: number;
	    cardType: string;
	    commercial: string;
	    countryOfIssuance: string;
	    customerLocation: string;
	    debit: string;
	    durbinRegulated: string;
	    expirationDate: string;
	    expirationMonth: string;
	    expirationYear: string;
	    healthcare: string;
	    imageUrl: string;
	    issuingBank: string;
	    last4: number;
	    maskedNumber: string;
	    payroll: string;
	    prepaid: string;
	    productId: string;
	    venmoSdk: boolean;
	}

}
declare module 'sparks-schemas/types/models/engagement' {
	export interface Payment {
	    clientToken: string;
	    gatewayId: string;
	    transactionId?: string;
	    subscriptionId?: string;
	    error?: boolean;
	    amountPaid?: string;
	    paidAt?: number;
	}
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
	    payment: Payment;
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

}
declare module 'sparks-schemas/types/models/fulfiller' {
	export interface Fulfiller {
	    oppKey: string;
	    teamKey: string;
	}

}
declare module 'sparks-schemas/types/models/gatewaycustomer' {
	export interface GatewayCustomer {
	    gatewayId: string;
	    profileKey: string;
	}

}
declare module 'sparks-schemas/types/models/membership' {
	export interface Membership {
	    answer: string;
	    engagementKey: string;
	    isAccepted: boolean;
	    isApplied: boolean;
	    isConfirmed: boolean;
	    isDeclined: boolean;
	    oppKey: string;
	    teamKey: string;
	}

}
declare module 'sparks-schemas/types/models/opp' {
	export interface Opp {
	    ownerProfileKey: string;
	    confirmationsOn: boolean;
	    description: string;
	    isPublic: boolean;
	    name: string;
	    projectKey: string;
	    question: string;
	}

}
declare module 'sparks-schemas/types/models/organizer' {
	export interface Organizer {
	    authority: string;
	    inviteEmail: string;
	    projectKey: string;
	    acceptedAt?: number;
	    invitedByProfileKey: string;
	    isAccepted?: boolean;
	    profileKey?: string;
	}

}
declare module 'sparks-schemas/types/models/profile' {
	export interface Profile {
	    email: string;
	    fullName: string;
	    intro: string;
	    isAdmin: boolean;
	    isConfirmed: boolean;
	    phone: string;
	    portraitUrl: boolean;
	    skills: string;
	    uid: string;
	    isEAP?: boolean;
	}

}
declare module 'sparks-schemas/types/models/project' {
	export interface Project {
	    description?: string;
	    facebookImageUrl?: string;
	    name: string;
	    ownerProfileKey: string;
	}

}
declare module 'sparks-schemas/types/models/projectimage' {
	export interface ProjectImage {
	    dataUrl: string;
	}

}
declare module 'sparks-schemas/types/models/shift' {
	export interface Shift {
	    assigned: number;
	    date: string;
	    end: string;
	    hours: number;
	    ownerProfileKey: string;
	    people: number;
	    reserved?: number;
	    start: string;
	    teamKey: string;
	}

}
declare module 'sparks-schemas/types/models/status' {
	export interface Status {
	    amount: string;
	    status: string;
	    timestamp: string;
	    transactionSource: string;
	    user: string;
	}

}
declare module 'sparks-schemas/types/models/team' {
	export interface Team {
	    ownerProfileKey: string;
	    description?: string;
	    name: string;
	    projectKey: string;
	    question?: string;
	}

}
declare module 'sparks-schemas/types/models/teamimage' {
	export interface TeamImage {
	    dataUrl: string;
	}

}
