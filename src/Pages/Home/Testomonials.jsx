import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testomonials = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
           

                <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>

                        <div className="text-center mt-12">
                       
                            <img className="mx-auto mt-12 mb-10" src="" alt="" />
                            <p className="md:w-[68rem] mx-auto text-[#444] md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum aperiam distinctio corrupti id iure incidunt nam architecto molestias quo enim.</p>
                            <h3 className="text-[#CD9003] mt-4 text-xs md:text-[1.3rem] font-medium">nahid alam</h3>

                        </div>

                    </SwiperSlide>
                <SwiperSlide>

                        <div className="text-center mt-12">
                       
                            <img className="mx-auto mt-12 mb-10" src="" alt="" />
                            <p className="md:w-[68rem] mx-auto text-[#444] md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum aperiam distinctio corrupti id iure incidunt nam architecto molestias quo enim.</p>
                            <h3 className="text-[#CD9003] mt-4 text-xs md:text-[1.3rem] font-medium">nahid alam</h3>

                        </div>

                    </SwiperSlide>
       
      </Swiper>
                </div>
        </div>
    );
};

export default Testomonials;