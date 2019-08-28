/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
export class AuthService {
    /**
     * @param {?} afAuth
     */
    constructor(afAuth) {
        this.afAuth = afAuth;
        firebase.initializeApp(environment.firebase);
        this.windowRef = window;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    signInWithPhone(num) {
        /** @type {?} */
        const appVerifier = this.windowRef.recaptchaVerifier;
        return firebase.auth().signInWithPhoneNumber(num, appVerifier);
    }
    /**
     * @param {?} otp
     * @return {?}
     */
    varifyOTP(otp) {
        return this.windowRef.confirmationResult.confirm(otp);
    }
    /**
     * @return {?}
     */
    signInWithGoogle() {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    signInWithEmail(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    signUpWithEmail(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    /**
     * @param {?} email
     * @return {?}
     */
    sendForgotPasswordLink(email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }
    /**
     * @return {?}
     */
    logOut() {
        this.afAuth.auth.signOut();
        window.location.reload();
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: AngularFireAuth }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.AngularFireAuth)); }, token: AuthService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AuthService.prototype.windowRef;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.afAuth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFJcEMsTUFBTSxPQUFPLFdBQVc7Ozs7SUFFdEIsWUFBb0IsTUFBc0I7UUFBdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDeEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUE7SUFFekIsQ0FBQzs7Ozs7SUFDRCxlQUFlLENBQUMsR0FBRzs7Y0FDWCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUI7UUFDcEQsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7Ozs7O0lBQ0QsU0FBUyxDQUFDLEdBQUc7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7Ozs7SUFDRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBQ0QsZUFBZSxDQUFDLEtBQVksRUFBQyxRQUFlO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7Ozs7OztJQUNELGVBQWUsQ0FBQyxLQUFLLEVBQUMsUUFBUTtRQUM1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUN4RSxDQUFDOzs7OztJQUNELHNCQUFzQixDQUFDLEtBQUs7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7O0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDMUIsQ0FBQzs7O1lBaENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGVBQWU7Ozs7O0lBTXRCLGdDQUFhOzs7OztJQUNELDZCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGggfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHdpbmRvd1JlZjphbnlcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZkF1dGg6QW5ndWxhckZpcmVBdXRoKSB7IFxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZW52aXJvbm1lbnQuZmlyZWJhc2UpO1xuICAgIHRoaXMud2luZG93UmVmID0gd2luZG93XG4gICAgXG4gIH1cbiAgc2lnbkluV2l0aFBob25lKG51bSl7XG4gICAgY29uc3QgYXBwVmVyaWZpZXIgPSB0aGlzLndpbmRvd1JlZi5yZWNhcHRjaGFWZXJpZmllcjtcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQaG9uZU51bWJlcihudW0sIGFwcFZlcmlmaWVyKVxuICB9XG4gIHZhcmlmeU9UUChvdHApe1xuICAgIHJldHVybiB0aGlzLndpbmRvd1JlZi5jb25maXJtYXRpb25SZXN1bHQuY29uZmlybShvdHApXG4gIH1cbiAgc2lnbkluV2l0aEdvb2dsZSgpe1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhQb3B1cChuZXcgYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKSk7XG4gIH1cbiAgc2lnbkluV2l0aEVtYWlsKGVtYWlsOnN0cmluZyxwYXNzd29yZDpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLHBhc3N3b3JkKVxuICB9XG4gIHNpZ25VcFdpdGhFbWFpbChlbWFpbCxwYXNzd29yZCl7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLHBhc3N3b3JkKVxuICB9XG4gIHNlbmRGb3Jnb3RQYXNzd29yZExpbmsoZW1haWwpe1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXG4gIH1cbiAgbG9nT3V0KCl7XG4gICAgdGhpcy5hZkF1dGguYXV0aC5zaWduT3V0KClcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxufVxuIl19