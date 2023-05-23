import { environment } from '../environments/environment';
import firebase from 'firebase/compat';
import 'firebase/firestore';

firebase.initializeApp(environment.firebase);
export const firebaseConfig = firebase;
