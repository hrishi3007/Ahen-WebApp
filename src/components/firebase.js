import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyBn6amFhBB4b2bUZ91e2ERi9DqJ-o8jthU",
  authDomain: "ahen-d51ad.firebaseapp.com",
  projectId: "ahen-d51ad",
  storageBucket: "ahen-d51ad.appspot.com",
  messagingSenderId: "574441389552",
  appId: "1:574441389552:web:e82e3baa7820d3b4aab135",
  measurementId: "G-25N56K3E7J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };