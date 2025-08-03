// Updated Photo Studio SPA (React + Vite + Tailwind + Firebase)

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Pages
const Services = () => <div className="p-4 text-center text-xl">Explore our services and packages.</div>;
const Booking = () => <div className="p-4 text-center text-xl">Book your next shoot here!</div>;
const Gallery = () => <div className="p-4 text-center text-xl">Client Photo Gallery</div>;
const Admin = () => <div className="p-4 text-center text-xl">Admin Dashboard</div>;

// App Component
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 font-sans">
      <Header />

      <main className="flex-grow px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
