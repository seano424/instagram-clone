// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAH_a6VFwgAh5l5we18N4iLwEGvDyRZpi4',
  authDomain: 'instagram-clone-4f85e.firebaseapp.com',
  projectId: 'instagram-clone-4f85e',
  storageBucket: 'instagram-clone-4f85e.appspot.com',
  messagingSenderId: '1009692423724',
  appId: '1:1009692423724:web:6fd13086a0779e08f64389',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
