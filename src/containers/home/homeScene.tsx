import React from "react";
import HomeStyle from "./homeStyle.module.scss";
import { DoubleRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { PropertyBox } from "@components/property/propertyBox";
import { GALLERY, PROPERTY_DATA } from "src/libs/constants";
import { PropertyGallery } from "@components/property/propertyGallery";
import { Testimonials } from "@components/home/testimonials";

export const HomeScene = () => {
    return (
        <>
            <section
                className={`relative overflow-hidden bg-cover bg-no-repeat ${HomeStyle.heroSection} h-[460px] md:h-[650px]`}
            >
                <img src="/images/pic-4.jpg" />
                <div className="flex h-full items-center justify-center bg-[hsla(0,0%,0%,0.7)] absolute top-0 w-full">
                    <div className="container mx-auto px-6 lg:px-10 2xl:px-32 text-center md:px-12">
                        <h1 className="mt-2 mb-6 text-2xl font-semibold md:text-6xl xl:text-7xl text-white">
                            Where Vision Meets Value <br /> Real Property
                            Solutions.
                        </h1>
                        <p className="text-white md:w-1/2 mx-auto mb-12">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>
                        <button
                            type="button"
                            className="btn btn-primary flex items-center justify-center mx-auto"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Get Properties{" "}
                            <DoubleRightOutlined className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 lg:px-10 2xl:px-32">
                <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
                    <div className="font-light text-gray-500 sm:text-lg">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                            Lorem Ipsum is dummy
                        </h2>
                        <p className="mb-4">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img
                            className="w-[291px] h-[232px] md:h-[405px] rounded-lg shadow-md shadow-secondary"
                            src="/images/pic-6.jpg"
                            alt="office content 1"
                        />
                        <img
                            className="mt-4 w-[291px] h-[232px] md:h-[405px] lg:mt-10 rounded-lg shadow-md shadow-secondary"
                            src="/images/pic-7.jpg"
                            alt="office content 2"
                        />
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 lg:px-10 2xl:px-32 mt-5">
                <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Properties
                </h2>
                <p className="mb-10 text-center mt-3 md:w-1/2 mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                </p>
                <div className="grid gap-x-6 lg:grid-cols-3">
                    <PropertyBox data={PROPERTY_DATA} />
                </div>
            </section>
            <section className="container mx-auto px-6 lg:px-10 2xl:px-32 mt-14">
                <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Properties Gallery
                </h2>
                <p className="mb-10 text-center mt-3 md:w-1/2 mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                </p>
                <div className="grid gap-x-0 lg:grid-cols-3">
                    <PropertyGallery data={GALLERY} />
                </div>
            </section>
            <section className="container mx-auto px-6 lg:px-10 2xl:px-32 mt-20">
                <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Testimonials
                </h2>
                <div className="mt-10">
                    <Testimonials />
                </div>
            </section>
        </>
    );
};
