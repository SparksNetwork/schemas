declare module 'sparks-schemas/lib/ajv' {
	import ajv = require("ajv");
	export default function (): ajv.Ajv;

}
declare module 'sparks-schemas/generators/command' {
	/**
	 * Generate a schema validator for a given command. The domain action should be
	 * in the format 'Domain.action'
	 *
	 * @param domainAction
	 * @returns {boolean | Promise<boolean>}
	 */
	export function command(domainAction: string): (data: any) => boolean | Promise<boolean>;

}
declare module 'sparks-schemas/generators/data' {
	import { ValidateFunction } from 'ajv';
	/**
	 * Create a data schema validator from the given domain action. The domain action
	 * should be in the format 'Domain.action'
	 *
	 * @param domainAction
	 * @returns {boolean | Promise<boolean>}
	 */
	export function data(domainAction: string): ValidateFunction;

}
declare module 'sparks-schemas/generators/email' {
	import * as Ajv from 'ajv';
	/**
	 * Generate a schema validator for emails.
	 *
	 * @returns {ValidateFunction}
	 */
	export function email(): Promise<Ajv.ValidateFunction>;

}
declare module 'sparks-schemas/lib/schema' {
	export function allSchemas(cb: any): void;
	export function readJsonFile(path: any, cb?: any): Promise<void | {}>;
	export function readJsonFiles(dir: any, cb?: any): Promise<void | {}>;
	export function propertyWithoutCustomData(property: any): any;
	export function propertiesWithoutCustomData(properties: any): {};

}
declare module 'sparks-schemas/types/command' {
	export interface Command {
	    domain: string;
	    action: string;
	    uid: string;
	    payload: any;
	    key?: string;
	}

}
declare module 'sparks-schemas/types/commands/ArrivalsCreate' {
	export interface ArrivalsCreatePayload {
	    values: {
	        profileKey: string;
	        projectKey: string;
	    };
	}
	export interface ArrivalsCreateCommand {
	    domain: "Arrivals";
	    action: "create";
	    uid: string;
	    payload: ArrivalsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ArrivalsRemove' {
	export interface ArrivalsRemovePayload {
	    key: string;
	}
	export interface ArrivalsRemoveCommand {
	    domain: "Arrivals";
	    action: "remove";
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
	    domain: "Assignments";
	    action: "create";
	    uid: string;
	    payload: AssignmentsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/AssignmentsRemove' {
	export interface AssignmentsRemovePayload {
	    key: string;
	}
	export interface AssignmentsRemoveCommand {
	    domain: "Assignments";
	    action: "remove";
	    uid: string;
	    payload: AssignmentsRemovePayload;
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
	    domain: "Commitments";
	    action: "create";
	    uid: string;
	    payload: CommitmentsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/CommitmentsRemove' {
	export interface CommitmentsRemovePayload {
	    key: string;
	}
	export interface CommitmentsRemoveCommand {
	    domain: "Commitments";
	    action: "remove";
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
	    domain: "Commitments";
	    action: "update";
	    uid: string;
	    payload: CommitmentsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsConfirm' {
	export interface EngagementsConfirmPayload {
	    key: string;
	}
	export interface EngagementsConfirmCommand {
	    domain: "Engagements";
	    action: "confirm";
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
	    domain: "Engagements";
	    action: "create";
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
	    domain: "Engagements";
	    action: "pay";
	    uid: string;
	    payload: EngagementsPayPayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsReclaim' {
	export interface EngagementsReclaimPayload {
	    key: string;
	}
	export interface EngagementsReclaimCommand {
	    domain: "Engagements";
	    action: "reclaim";
	    uid: string;
	    payload: EngagementsReclaimPayload;
	}

}
declare module 'sparks-schemas/types/commands/EngagementsRemove' {
	export interface EngagementsRemovePayload {
	    key: string;
	}
	export interface EngagementsRemoveCommand {
	    domain: "Engagements";
	    action: "remove";
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
	    domain: "Engagements";
	    action: "update";
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
	    domain: "Fulfillers";
	    action: "create";
	    uid: string;
	    payload: FulfillersCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/FulfillersRemove' {
	export interface FulfillersRemovePayload {
	    key: string;
	}
	export interface FulfillersRemoveCommand {
	    domain: "Fulfillers";
	    action: "remove";
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
	    domain: "Memberships";
	    action: "create";
	    uid: string;
	    payload: MembershipsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/MembershipsRemove' {
	export interface MembershipsRemovePayload {
	    key: string;
	}
	export interface MembershipsRemoveCommand {
	    domain: "Memberships";
	    action: "remove";
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
	    domain: "Memberships";
	    action: "update";
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
	    domain: "Opps";
	    action: "create";
	    uid: string;
	    payload: OppsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/OppsRemove' {
	export interface OppsRemovePayload {
	    key: string;
	}
	export interface OppsRemoveCommand {
	    domain: "Opps";
	    action: "remove";
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
	    domain: "Opps";
	    action: "update";
	    uid: string;
	    payload: OppsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/OrganizersAccept' {
	export interface OrganizersAcceptPayload {
	    key: string;
	}
	export interface OrganizersAcceptCommand {
	    domain: "Organizers";
	    action: "accept";
	    uid: string;
	    payload: OrganizersAcceptPayload;
	}

}
declare module 'sparks-schemas/types/commands/OrganizersCreate' {
	export interface OrganizersCreatePayload {
	    values: {
	        authority: "organizer";
	        inviteEmail: string;
	        projectKey: string;
	    };
	}
	export interface OrganizersCreateCommand {
	    domain: "Organizers";
	    action: "create";
	    uid: string;
	    payload: OrganizersCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/OrganizersRemove' {
	export interface OrganizersRemovePayload {
	    key: string;
	}
	export interface OrganizersRemoveCommand {
	    domain: "Organizers";
	    action: "remove";
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
	        portraitUrl?: string;
	        skills?: string;
	    };
	}
	export interface ProfilesCreateCommand {
	    domain: "Profiles";
	    action: "create";
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
	        portraitUrl?: string;
	        skills?: string;
	    };
	}
	export interface ProfilesUpdateCommand {
	    domain: "Profiles";
	    action: "update";
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
	    domain: "ProjectImages";
	    action: "create";
	    uid: string;
	    payload: ProjectImagesCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProjectImagesRemove' {
	export interface ProjectImagesRemovePayload {
	    key: string;
	}
	export interface ProjectImagesRemoveCommand {
	    domain: "ProjectImages";
	    action: "remove";
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
	    domain: "Projects";
	    action: "create";
	    uid: string;
	    payload: ProjectsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ProjectsRemove' {
	export interface ProjectsRemovePayload {
	    key: string;
	}
	export interface ProjectsRemoveCommand {
	    domain: "Projects";
	    action: "remove";
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
	    domain: "Projects";
	    action: "update";
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
	    domain: "Shifts";
	    action: "create";
	    uid: string;
	    payload: ShiftsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/ShiftsRemove' {
	export interface ShiftsRemovePayload {
	    key: string;
	}
	export interface ShiftsRemoveCommand {
	    domain: "Shifts";
	    action: "remove";
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
	    domain: "Shifts";
	    action: "update";
	    uid: string;
	    payload: ShiftsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/TeamImagesRemove' {
	export interface TeamImagesRemovePayload {
	    key: string;
	}
	export interface TeamImagesRemoveCommand {
	    domain: "TeamImages";
	    action: "remove";
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
	    domain: "TeamImages";
	    action: "update";
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
	    domain: "Teams";
	    action: "create";
	    uid: string;
	    payload: TeamsCreatePayload;
	}

}
declare module 'sparks-schemas/types/commands/TeamsRemove' {
	export interface TeamsRemovePayload {
	    key: string;
	}
	export interface TeamsRemoveCommand {
	    domain: "Teams";
	    action: "remove";
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
	    domain: "Teams";
	    action: "update";
	    uid: string;
	    payload: TeamsUpdatePayload;
	}

}
declare module 'sparks-schemas/types/commands/UsersMigrate' {
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
declare module 'sparks-schemas/types/emails/accepted' {
	export interface AcceptedEmail {
	    fromEmail?: string;
	    fromName?: string;
	    toEmail: string;
	    templateId: "dec62dab-bf8e-4000-975a-0ef6b264dafe";
	    substitutions: {
	        username: string;
	        opp_name: string;
	        project_name: string;
	        engagementUrl: string;
	    };
	}

}
declare module 'sparks-schemas/types/emails/organizerInvite' {
	export interface OrganizerInviteEmail {
	    fromEmail?: string;
	    fromName?: string;
	    toEmail: string;
	    templateId: "a005f2a2-74b0-42f4-8ac6-46a4b137b7f1";
	    substitutions: {
	        project_name: string;
	        inviteUrl: string;
	    };
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
declare module 'sparks-schemas/types/models/EngagementPayment' {
	export interface EngagementPayment {
	    transactionId?: string;
	    subscriptionId?: string;
	    error: any;
	    amountPaid?: string;
	    paidAt?: number;
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
declare module 'sparks-schemas/types/models/notification' {
	export interface Notification {
	    type: string;
	    sendAt?: number;
	    [k: string]: any;
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
declare module 'sparks-schemas/types/models/paymentDue' {
	export interface PaymentDue {
	    payment: number;
	    deposit: number;
	    payable: number;
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
	    portraitUrl: string;
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
declare module 'sparks-schemas/types/transactionEmail' {
	export interface TransactionEmail {
	    fromEmail?: string;
	    fromName?: string;
	    toEmail: string;
	    templateId: string;
	    substitutions: {
	        [key: string]: string;
	    };
	}

}
