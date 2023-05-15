import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCySS9FgoSMsFD63MGTy7sZasXY6O_UhwM",
  authDomain: "rapidngo-30ea6.firebaseapp.com",
  projectId: "rapidngo-30ea6",
  storageBucket: "rapidngo-30ea6.appspot.com",
  messagingSenderId: "1085132201616",
  appId: "1:1085132201616:web:66793a1a33ef94ef664215",
  measurementId: "G-8Y1JYSJMVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
