import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "n-ai-task.firebaseapp.com",
  projectId: "n-ai-task",
  storageBucket: "n-ai-task.firebasestorage.app",
  messagingSenderId: "1045953817388",
  appId: "1:1045953817388:web:c5d95f24ba316b78ab1a89"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);