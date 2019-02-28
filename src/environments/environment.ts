// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { FirebaseAppConfig } from "@angular/fire";

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAgdgMzW4j9EEXCHM-hPzN0hwajRd0L9iQ",
  authDomain: "test-b2e86.firebaseapp.com",
  databaseURL: "https://test-b2e86.firebaseio.com",
  projectId: "test-b2e86",
  storageBucket: "test-b2e86.appspot.com",
  messagingSenderId: "800707778337"
};

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
