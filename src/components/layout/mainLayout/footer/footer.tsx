import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "@components/theme/icons/facebook";
import { TwitterIcon } from "@components/theme/icons/Twitter";
import { LinkedInIcon } from "@components/theme/icons/LinkedIn";
import { InstagramIcon } from "@components/theme/icons/Instagram";
import { LocationIcon } from "@components/theme/icons/Location";
import { PhoneIcon } from "@components/theme/icons/Phone";

export const Footer = () => {
    const footerMenu = [
        {
            label: "About",
            url: "/",
        },
        {
            label: "Process",
            url: "/process",
        },
        {
            label: "Services",
            url: "/services",
        },
        {
            label: "Industries",
            url: "/industries",
        },
        {
            label: "Our Work",
            url: "/our-work",
        },
        {
            label: "Technology",
            url: "/technology",
        },
        {
            label: "Statistics",
            url: "/statistics",
        },
        {
            label: "Business Modal",
            url: "/business-modal",
        },
        {
            label: "Testimonials",
            url: "/testimonials",
        },
    ];

    return (
        <>
            <section className="border-b border-t py-7 border-white/10">
                <div className="md:flex block items-center md:text-left text-center">
                    <div className="lg:w-2/4 md:w-3/5 ">
                        <h2 className="lg:text-[30px] text-2xl font-bold md:!leading-[48px] leading-10">
                            We&#39;ve prepared everything, it&#39;s time for you
                            to tell the problem
                        </h2>
                    </div>
                    <div className="ml-auto md:mt-0 mt-5">
                        <button className="btn btn-primary p-3 lg:px-12 px-8">
                            Send Quote
                        </button>
                    </div>
                </div>
            </section>
            <footer className="py-14">
                <div className="bg-white/5 rounded-[5px]">
                    <div className="text-center py-8">
                        <div className="flex items-center justify-center mb-10 md:mt-3">
                            <Image
                                src="/logo.svg"
                                width={152}
                                height={31}
                                alt="Logo"
                            />
                            <span className="ml-5 mr-4 bg-white w-[1px] h-[26px]"></span>
                            <div className="flex justify-between items-center">
                                <FacebookIcon className="md:mr-3 mr-2" />
                                <TwitterIcon className="md:mr-3 mr-2" />
                                <LinkedInIcon className="md:mr-3 mr-2" />
                                <InstagramIcon />
                            </div>
                        </div>
                        <div className="my-6">
                            {footerMenu.map((menu) => {
                                return (
                                    <Link
                                        href={menu.url}
                                        key={menu.label}
                                        className="lg:px-5 px-2 lg:text-sm text-xs font-normal border-r last:border-r-0"
                                    >
                                        {menu.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex md:items-center justify-center lg:text-sm text-xs font-normal mb-6">
                            <LocationIcon />
                            <span className="ml-2 md:w-auto w-4/5">
                                402, Dwarkesh business hub, opp. Home Town,
                                Ahmedabad, Gujarat, India 380005
                            </span>
                        </div>
                        <p className="flex items-center justify-center lg:text-sm text-xs font-normal">
                            <PhoneIcon />
                            <span className="ml-2">+917016799899</span>
                        </p>
                    </div>
                    <div className="lg:text-sm text-xs font-normal p-5 text-center border-t border-white/10">
                        © 2023 linearloop. All rights reserved
                    </div>
                </div>
            </footer>
        </>
    );
};
