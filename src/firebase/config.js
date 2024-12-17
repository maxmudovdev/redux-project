import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlzUhLgs3Uy3ZXnA-IXifUWX855vbyg2w",
  authDomain: "redux-project-5461a.firebaseapp.com",
  projectId: "redux-project-5461a",
  storageBucket: "redux-project-5461a.appspot.com",
  messagingSenderId: "642347187426",
  appId: "1:642347187426:web:cdba48e5f5f8d637b932bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth instance
export const auth = getAuth(app);
export default app;
