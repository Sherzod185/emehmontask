import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD21u3v2mcl2d7MRNGcqAQq8TT2olhHfaI",
  authDomain: "atisu-ce29c.firebaseapp.com",
  projectId: "atisu-ce29c",
  storageBucket: "atisu-ce29c.appspot.com",
  messagingSenderId: "737994835943",
  appId: "1:737994835943:web:59c2bda8201f2c34a65f42",
  measurementId: "G-QV1058C1TQ",
};
const app = new initializeApp(firebaseConfig);
const auth = new getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
