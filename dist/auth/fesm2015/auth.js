import { initializeApp, auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth as auth$1 } from 'firebase/app';
import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/** @type {?} */
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB03fbxNKG9fquNMkK-05zhbw70SMAtVkc",
        authDomain: "tut1-a4ded.firebaseapp.com",
        databaseURL: "https://tut1-a4ded.firebaseio.com",
        projectId: "tut1-a4ded",
        storageBucket: "tut1-a4ded.appspot.com",
        messagingSenderId: "347515672762",
        appId: "1:347515672762:web:051a112bbbc0fca5"
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} afAuth
     */
    constructor(afAuth) {
        this.afAuth = afAuth;
        initializeApp(environment.firebase);
        this.windowRef = window;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    signInWithPhone(num) {
        /** @type {?} */
        const appVerifier = this.windowRef.recaptchaVerifier;
        return auth().signInWithPhoneNumber(num, appVerifier);
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
        return this.afAuth.auth.signInWithPopup(new auth$1.GoogleAuthProvider());
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
/** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(AngularFireAuth)); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-auth',
                template: `
    <p>
      auth works!
    </p>
  `
            }] }
];
/** @nocollapse */
AuthComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthModule {
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AuthComponent],
                imports: [],
                exports: [AuthComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthService, AuthComponent, AuthModule };

//# sourceMappingURL=auth.js.map