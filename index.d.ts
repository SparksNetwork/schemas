declare module 'sparks-schemas/generator' {
	export function command(name: string): Function;

}
declare module 'sparks-schemas/index' {
	export * from 'sparks-schemas/generator';

}
declare module 'sparks-schemas/types/command' {
	export interface Command {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: any;
	}

}
declare module 'sparks-schemas/types/commands/ArrivalsCreate' {
	export interface ArrivalsCreatePayload {
	    values: {
	        arrivedAt: number;
	        profileKey: string;
	        projectKey: string;
	    };
	}
	export interface ArrivalsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ArrivalsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ArrivalsRemove' {
	export interface ArrivalsRemovePayload {
	    key: string;
	}
	export interface ArrivalsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ArrivalsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/AssignmentsCreate' {
	export interface AssignmentsCreatePayload {
	    values: {
	        engagementKey: string;
	        oppKey: string;
	        profileKey: string;
	        shiftKey: string;
	        teamKey: string;
	    };
	}
	export interface AssignmentsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: AssignmentsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/AssignmentsRemove' {
	export interface AssignmentsRemovePayload {
	    key: string;
	}
	export interface AssignmentsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: AssignmentsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/AssignmentsUpdate' {
	export interface AssignmentsUpdatePayload {
	    key: string;
	    values: {
	        engagementKey?: string;
	        oppKey?: string;
	        profileKey?: string;
	        shiftKey?: string;
	        teamKey?: string;
	    };
	}
	export interface AssignmentsUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: AssignmentsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/CommitmentsCreate' {
	export interface CommitmentsCreatePayload {
	    values: {
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
	    };
	}
	export interface CommitmentsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: CommitmentsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/CommitmentsRemove' {
	export interface CommitmentsRemovePayload {
	    key: string;
	}
	export interface CommitmentsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: CommitmentsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/CommitmentsUpdate' {
	export interface CommitmentsUpdatePayload {
	    key: string;
	    values: {
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
	    };
	}
	export interface CommitmentsUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: CommitmentsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsConfirm' {
	export interface EngagementsConfirmPayload {
	    key: string;
	}
	export interface EngagementsConfirmCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: EngagementsConfirmPayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsCreate' {
	export interface EngagementsCreatePayload {
	    values: {
	        oppKey: string;
	        profileKey: string;
	    };
	}
	export interface EngagementsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: EngagementsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsPay' {
	export interface EngagementsPayPayload {
	    key: string;
	    values: {
	        paymentNonce: string;
	    };
	}
	export interface EngagementsPayCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: EngagementsPayPayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsRemove' {
	export interface EngagementsRemovePayload {
	    key: string;
	}
	export interface EngagementsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: EngagementsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsUpdate' {
	export interface EngagementsUpdatePayload {
	    key: string;
	    values: {
	        oppKey?: string;
	        answer?: string;
	        declined?: boolean;
	        isAccepted?: boolean;
	        isApplied?: boolean;
	        isAssigned?: boolean;
	        priority?: boolean;
	    };
	}
	export interface EngagementsUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: EngagementsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/FulfillersCreate' {
	export interface FulfillersCreatePayload {
	    values: {
	        oppKey: string;
	        teamKey: string;
	    };
	}
	export interface FulfillersCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: FulfillersCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/FulfillersRemove' {
	export interface FulfillersRemovePayload {
	    key: string;
	}
	export interface FulfillersRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: FulfillersRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/MembershipsCreate' {
	export interface MembershipsCreatePayload {
	    values: {
	        answer: string;
	        engagementKey: string;
	        oppKey: string;
	        teamKey: string;
	    };
	}
	export interface MembershipsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: MembershipsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/MembershipsRemove' {
	export interface MembershipsRemovePayload {
	    key: string;
	}
	export interface MembershipsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: MembershipsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/MembershipsUpdate' {
	export interface MembershipsUpdatePayload {
	    key: string;
	    values: {
	        answer?: string;
	        isAccepted?: boolean;
	        isApplied?: boolean;
	        isConfirmed?: boolean;
	        isDeclined?: boolean;
	    };
	}
	export interface MembershipsUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: MembershipsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/OppsCreate' {
	export interface OppsCreatePayload {
	    values: {
	        confirmationsOn?: boolean;
	        description?: string;
	        isPublic?: boolean;
	        name: string;
	        projectKey: string;
	        question?: string;
	    };
	}
	export interface OppsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: OppsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/OppsRemove' {
	export interface OppsRemovePayload {
	    key: string;
	}
	export interface OppsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: OppsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/OppsUpdate' {
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

}
declare module 'sparks-schemas/types/commands/OrganizersAccept' {
	export interface OrganizersAcceptPayload {
	    key: string;
	}
	export interface OrganizersAcceptCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: OrganizersAcceptPayload;
	}

}
declare module 'sparks-schemas/types/commands/OrganizersCreate' {
	export interface OrganizersCreatePayload {
	    values: {
	        authority: string;
	        inviteEmail: string;
	        projectKey: string;
	        acceptedAt?: number;
	        isAccepted?: boolean;
	        profileKey?: string;
	    };
	}
	export interface OrganizersCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: OrganizersCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/OrganizersRemove' {
	export interface OrganizersRemovePayload {
	    key: string;
	}
	export interface OrganizersRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: OrganizersRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProfilesCreate' {
	export interface ProfilesCreatePayload {
	    values: {
	        email: string;
	        fullName?: string;
	        intro?: string;
	        phone?: string;
	        portraitUrl?: boolean;
	        skills?: string;
	    };
	}
	export interface ProfilesCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ProfilesCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProfilesUpdate' {
	export interface ProfilesUpdatePayload {
	    key: string;
	    values: {
	        email?: string;
	        fullName?: string;
	        intro?: string;
	        phone?: string;
	        portraitUrl?: boolean;
	        skills?: string;
	    };
	}
	export interface ProfilesUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ProfilesUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProjectImagesCreate' {
	export interface ProjectImagesCreatePayload {
	    values: {
	        key: string;
	        dataUrl: string;
	    };
	}
	export interface ProjectImagesCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ProjectImagesCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProjectImagesRemove' {
	export interface ProjectImagesRemovePayload {
	    key: string;
	}
	export interface ProjectImagesRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ProjectImagesRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProjectsCreate' {
	export interface ProjectsCreatePayload {
	    values: {
	        description?: string;
	        facebookImageUrl?: string;
	        name: string;
	    };
	}
	export interface ProjectsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ProjectsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProjectsRemove' {
	export interface ProjectsRemovePayload {
	    key: string;
	}
	export interface ProjectsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ProjectsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProjectsUpdate' {
	export interface ProjectsUpdatePayload {
	    key: string;
	    values: {
	        description?: string;
	        facebookImageUrl?: string;
	        name?: string;
	    };
	}
	export interface ProjectsUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ProjectsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ShiftsCreate' {
	export interface ShiftsCreatePayload {
	    values: {
	        date: string;
	        end: string;
	        hours: number;
	        people: number;
	        reserved?: number;
	        start: string;
	        teamKey: string;
	    };
	}
	export interface ShiftsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ShiftsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ShiftsRemove' {
	export interface ShiftsRemovePayload {
	    key: string;
	}
	export interface ShiftsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ShiftsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/ShiftsUpdate' {
	export interface ShiftsUpdatePayload {
	    key: string;
	    values: {
	        date?: string;
	        end?: string;
	        hours?: number;
	        people?: number;
	        reserved?: number;
	        start?: string;
	    };
	}
	export interface ShiftsUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: ShiftsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/TeamImagesRemove' {
	export interface TeamImagesRemovePayload {
	    key: string;
	}
	export interface TeamImagesRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: TeamImagesRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/TeamImagesUpdate' {
	export interface TeamImagesUpdatePayload {
	    key: string;
	    values: {
	        dataUrl: string;
	    };
	}
	export interface TeamImagesUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: TeamImagesUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/TeamsCreate' {
	export interface TeamsCreatePayload {
	    values: {
	        description?: string;
	        name: string;
	        projectKey: string;
	        question?: string;
	    };
	}
	export interface TeamsCreateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: TeamsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/TeamsRemove' {
	export interface TeamsRemovePayload {
	    key: string;
	}
	export interface TeamsRemoveCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: TeamsRemovePayload;
	}

}
declare module 'sparks-schemas/types/commands/TeamsUpdate' {
	export interface TeamsUpdatePayload {
	    key: string;
	    values: {
	        description?: string;
	        name?: string;
	        question?: string;
	    };
	}
	export interface TeamsUpdateCommand {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: TeamsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/data' {
	export interface Data {
	    domain: string;
	    action: "create" | "update" | "remove";
	    key: string;
	}
	export interface CreateData<T> extends Data {
	    action: "create";
	    values: T;
	}
	export interface UpdateData<T> extends Data {
	    action: "update";
	    values: T;
	}
	export interface RemoveData extends Data {
	    action: "remove";
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
