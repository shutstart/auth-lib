import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
export declare class AuthService {
    private afAuth;
    windowRef: any;
    constructor(afAuth: AngularFireAuth);
    signInWithPhone(num: any): Promise<auth.ConfirmationResult>;
    varifyOTP(otp: any): any;
    signInWithGoogle(): Promise<auth.UserCredential>;
    signInWithEmail(email: string, password: string): Promise<auth.UserCredential>;
    signUpWithEmail(email: any, password: any): Promise<auth.UserCredential>;
    sendForgotPasswordLink(email: any): Promise<void>;
    logOut(): void;
}
