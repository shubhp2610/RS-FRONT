import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export const Testimonials = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div
                    className="relative w-full"
                    data-te-carousel-active
                    data-te-carousel-item
                >
                    <Image
                        className="mx-auto mb-6 rounded-full"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
                        alt="avatar"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                            <h5 className="text-2xl font-bold">Maria Kate</h5>
                            <p className="mb-4 font-medium text-primary/50 text-sm">
                                Photographer
                            </p>
                            <p className="mb-6 text-base">
                                In ac turpis justo. Vivamus auctor quam vitae
                                odio feugiat pulvinar. Sed semper ligula sed
                                lorem tincidunt dignissim. Nam sed cursus
                                lectus. Proin non rutrum magna. Proin gravida,
                                justo et imperdiet tristique turpis nisi
                                viverra.
                            </p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full"
                    data-te-carousel-active
                    data-te-carousel-item
                >
                    <Image
                        className="mx-auto mb-6 rounded-full"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg"
                        alt="avatar"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                            <h5 className="text-2xl font-bold">John Doe</h5>
                            <p className="mb-4 font-medium text-primary/50 text-sm">
                                Web Developer
                            </p>
                            <p className="mb-6 text-base">
                                In ac turpis justo. Vivamus auctor quam vitae
                                odio feugiat pulvinar. Sed semper ligula sed
                                lorem tincidunt dignissim. Nam sed cursus
                                lectus. Proin non rutrum magna. Proin gravida,
                                justo et imperdiet tristique turpis nisi
                                viverra.
                            </p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full"
                    data-te-carousel-active
                    data-te-carousel-item
                >
                    <Image
                        className="mx-auto mb-6 rounded-full"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                        alt="avatar"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                            <h5 className="text-2xl font-bold">Anna Deynah</h5>
                            <p className="mb-4 font-medium text-primary/50 text-sm">
                                UX Designer
                            </p>
                            <p className="mb-6 text-base">
                                In ac turpis justo. Vivamus auctor quam vitae
                                odio feugiat pulvinar. Sed semper ligula sed
                                lorem tincidunt dignissim. Nam sed cursus
                                lectus. Proin non rutrum magna. Proin gravida,
                                justo et imperdiet tristique turpis nisi
                                viverra.
                            </p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
