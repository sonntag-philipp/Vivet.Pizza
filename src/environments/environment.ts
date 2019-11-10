// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCkPLqNSdq-D50cx5keNf905boLrWOaFmk',
    authDomain: 'vivet-pizza.firebaseapp.com',
    databaseURL: 'https://vivet-pizza.firebaseio.com',
    projectId: 'vivet-pizza',
    storageBucket: 'vivet-pizza.appspot.com',
    messagingSenderId: '213104234200'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
