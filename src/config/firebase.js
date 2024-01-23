import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: SOP_API_KEY,
  authDomain: SOP_AUTH_DOMAIN,
  projectId: SOP_PROJECT_ID,
  storageBucket: SOP_STORAGE_BUCKET,
  messagingSenderId: SOP_MESSAGING_SENDER_ID,
  appId: SOP_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
