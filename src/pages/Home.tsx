import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
            {/* Hero / Slideshow */}
            <HeroSlider />
            {/* Camera Details */}
            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mb-6">📷 Our Camera Gear</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        {
                            img: '/sony7r5.jpeg',
                            title: 'Sony Alpha 7R5',
                            desc: 'High-resolution full-frame mirrorless camera for stunning detail and color.',
                        },
                        {
                            img: '/sonyz150.jpeg',
                            title: 'Sony Z150',
                            desc: 'Pro 4K video camera ideal for cinematic videography and low-light performance.',
                        },
                        {
                            img: '/drone.jpeg',
                            title: 'DJI Mavic Drone',
                            desc: 'Perfect for capturing aerial views and cinematic motion shots.',
                        },
                        {
                            img: '/ledscreen.jpeg',
                            title: 'LED Screen 8x12',
                            desc: 'Large LED display perfect for wedding or event backdrops.',
                        },
                        {
                            img: '/artlence.jpeg',
                            title: 'Sigma Art Lenses',
                            desc: 'Premium lenses (35mm, 85mm, 24-70mm) for creative depth and clarity.',
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-xl shadow-md">
                            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>





            {/* Experience */}
            <section className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6">
                {/* Left: Owner Photo */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
                            <img
                                src="/owner.jpg"
                                alt="Owner"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-lg font-medium text-green-700">CH Harish</p>
                    </div>
                </div>


                {/* Right: Experience + Contact */}
                <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700">🧑‍💼 Our Experience</h2>
                    <p className="text-gray-700 leading-relaxed">
                        With over <strong>15 Years of professional photography</strong> experience, SriHariDigital Studio
                        has covered more than <strong>1000+ weddings</strong>, <strong>300 baby shoots</strong>, and
                        numerous fashion, event, and commercial shoots. We bring passion and precision to every frame.
                    </p>

                    {/* WhatsApp Contact */}
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-white bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 rounded-lg shadow-md w-fit"
                    >
                        <FaWhatsapp className="text-lg" />
                        <span className="font-medium text-base">Chat on WhatsApp: +91 7993102265</span>
                    </a>
                </div>
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
