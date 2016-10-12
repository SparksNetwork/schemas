export interface Organizer {
    authority: string;
    inviteEmail: string;
    projectKey: string;
    acceptedAt?: number;
    invitedByProfileKey: string;
    isAccepted?: boolean;
    profileKey?: string;
}
