(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('firebase'), require('@angular/fire/auth'), require('firebase/app'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('auth', ['exports', 'firebase', '@angular/fire/auth', 'firebase/app', '@angular/core'], factory) :
    (factory((global.auth = {}),global.firebase,global.ng.fire.auth,global.app,global.ng.core));
}(this, (function (exports,firebase,i1,app,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    /** @type {?} */
    var environment = {
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
    var AuthService = /** @class */ (function () {
        function AuthService(afAuth) {
            this.afAuth = afAuth;
            firebase.initializeApp(environment.firebase);
            this.windowRef = window;
        }
        /**
         * @param {?} num
         * @return {?}
         */
        AuthService.prototype.signInWithPhone = /**
         * @param {?} num
         * @return {?}
         */
            function (num) {
                /** @type {?} */
                var appVerifier = this.windowRef.recaptchaVerifier;
                return firebase.auth().signInWithPhoneNumber(num, appVerifier);
            };
        /**
         * @param {?} otp
         * @return {?}
         */
        AuthService.prototype.varifyOTP = /**
         * @param {?} otp
         * @return {?}
         */
            function (otp) {
                return this.windowRef.confirmationResult.confirm(otp);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.signInWithGoogle = /**
         * @return {?}
         */
            function () {
                return this.afAuth.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
            };
        /**
         * @param {?} email
         * @param {?} password
         * @return {?}
         */
        AuthService.prototype.signInWithEmail = /**
         * @param {?} email
         * @param {?} password
         * @return {?}
         */
            function (email, password) {
                return this.afAuth.auth.signInWithEmailAndPassword(email, password);
            };
        /**
         * @param {?} email
         * @param {?} password
         * @return {?}
         */
        AuthService.prototype.signUpWithEmail = /**
         * @param {?} email
         * @param {?} password
         * @return {?}
         */
            function (email, password) {
                return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            };
        /**
         * @param {?} email
         * @return {?}
         */
        AuthService.prototype.sendForgotPasswordLink = /**
         * @param {?} email
         * @return {?}
         */
            function (email) {
                return this.afAuth.auth.sendPasswordResetEmail(email);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.logOut = /**
         * @return {?}
         */
            function () {
                this.afAuth.auth.signOut();
                window.location.reload();
            };
        AuthService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () {
            return [
                { type: i1.AngularFireAuth }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.AngularFireAuth)); }, token: AuthService, providedIn: "root" });
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthComponent = /** @class */ (function () {
        function AuthComponent() {
        }
        /**
         * @return {?}
         */
        AuthComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AuthComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-auth',
                        template: "\n    <p>\n      auth works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AuthComponent.ctorParameters = function () { return []; };
        return AuthComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        AuthModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [AuthComponent],
                        imports: [],
                        exports: [AuthComponent]
                    },] }
        ];
        return AuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AuthService = AuthService;
    exports.AuthComponent = AuthComponent;
    exports.AuthModule = AuthModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=auth.umd.js.map