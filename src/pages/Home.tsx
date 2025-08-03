import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Hero / Slideshow */}
      <HeroSlider />
      {/* Camera Details */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">📷 Our Camera Gear</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Sony Alpha 7 III – Full Frame Mirrorless</li>
          <li>Canon EOS R6 – 4K Video + Low Light Performance</li>
          <li>DJI Mavic Mini Drone – Aerial Photography</li>
          <li>Godox AD600Pro & Softboxes – Studio Lighting</li>
          <li>Sigma Art Lenses (35mm, 85mm) – Premium Portrait Glass</li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🧑‍💼 Our Experience</h2>
        <p className="text-gray-700 leading-relaxed">
          With over <strong>10 years of professional photography</strong> experience, SriHariDigital Studio
          has covered more than <strong>500 weddings</strong>, <strong>300 baby shoots</strong>, and
          numerous fashion, event, and commercial shoots. We bring passion and precision to every frame.
        </p>
      </section>

      {/* Sample Photos Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">📸 Featured Moments</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            '/photo1.jpg',
            '/photo2.jpg',
            '/photo3.jpg',
            '/photo4.jpg',
            '/photo5.jpg',
            '/photo1.jpg',
            '/photo2.jpg',
            '/photo3.jpg',
          ].map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Featured ${idx}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
