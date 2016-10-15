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
