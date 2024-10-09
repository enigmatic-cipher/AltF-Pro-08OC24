import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import avasant from "../assets/avasant.png";
import velocis from "../assets/velocis.png";
import urbanic from "../assets/urbanic.png";
import lifescan from "../assets/lifescan.png";
import etraveli from "../assets/etraveli.png";

const Carousel = () => {
  return (
    <>
      <div className="w-[42.7%] h-72 border-solid border-2 border-gray-300 mx-[14.5%] mb-10 rounded-md overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-32 mySwipper"
        >
          <SwiperSlide>
            <div className="grid justify-items-center mt-9 px-10">
              <img src={lifescan} />
              <p className="text-center mt-5">
                The space is clean, comfortable, and has everything you need to
                be productive. The staff here are amazing. They are friendly,
                professional, and always available to assist with any needs.
              </p>
              <h3 className="mt-10 text-lg">Anuj Gupta</h3>
              <span className="mt-0">CEO/Co-Founder</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-items-center mt-9 px-10">
              <img src={urbanic} />
              <p className="text-center mt-5">
                The space is modern, bright, and open, making it a great work
                environment. Plus, the location is fantastic and easily
                accessible. I highly recommend AltF to anyone looking for a
                great coworking space!
              </p>
              <h3 className="mt-9 text-lg">Basant Baura</h3>
              <span className="mt-0">Branch Secretary</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-items-center mt-9 px-10">
              <img src={velocis} />
              <p className="text-center mt-5">
                AltF Coworking is hands down the best coworking space I've ever
                worked in. The facilities are top-notch, with high-speed
                internet, ergonomic furniture, and all the amenities you could
                need.
              </p>
              <h3 className="mt-9 text-lg">Ashwin Rastogi</h3>
              <span className="mt-0">Founder</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-items-center mt-9 px-10">
              <img src={etraveli} />
              <p className="text-center mt-5">
                The interiors are amazing, the washrooms are clean and
                well-maintained, and the coffee and tea availability is a
                game-changer. Booking your space is easy, and with free wifi
                available, it's the perfect place to get work done in a
                professional yet relaxed environment
              </p>
              <h3 className="mt-9 text-lg">Vipin Sehgal</h3>
              <span className="mt-0">Associate Vice President</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-items-center mt-9 px-10">
              <img src={avasant} />
              <p className="text-center mt-5">
                AltF Coworking is perfect for those who need a professional
                address and access to great amenities. It's affordable,
                convenient, and flexible. I've used their meeting rooms several
                times, and it's always been a great experience
              </p>
              <h3 className="mt-9 text-lg">Meenakshi Nanda</h3>
              <span className="mt-0">Executive Assistant</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
