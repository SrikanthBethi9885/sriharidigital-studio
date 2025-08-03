import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


const slides = [
  {
    image: '/photo1.jpg',
    caption: 'Wedding Memories Captured Beautifully 💍',
  },
  {
    image: '/photo2.jpg',
    caption: 'Cherish Your Baby’s First Smile 👶',
  },
  {
    image: '/photo3.jpg',
    caption: 'Celebrate Love With Stunning Couple Shoots ❤️',
  },
  {
    image: '/photo4.jpg',
    caption: 'Studio Portraits That Speak Volumes 🎭',
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-md">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-[300px] sm:h-[400px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
                <h2 className="text-white text-xl sm:text-3xl font-bold drop-shadow-lg">
                  {slide.caption}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
