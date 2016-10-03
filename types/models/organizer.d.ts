export interface Organizer {
    authority: string;
    authorProfileKey: string;
    inviteEmail: string;
    projectKey: string;
    acceptedAt?: number;
    invitedByProfileKey?: string;
    isAccepted?: boolean;
    profileKey?: string;
}
