"use client";
import { MenuIcon } from "@components/theme/icons/menu";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { LayoutContext, LayoutContextModel } from "src/contexts/layoutContext";

export const Header = () => {
    const { collapsed, setCollapsed }: LayoutContextModel =
        useContext(LayoutContext);

    const headerMenu = [
        {
            label: "Home",
            url: "/",
        },
        {
            label: "Land",
            url: "/land",
        },
        {
            label: "Commercial",
            url: "/commercial",
        },
        {
            label: "Residential",
            url: "/residential",
        },
        {
            label: "Locations",
            url: "/locations",
        },
        {
            label: "About",
            url: "/about",
        },
        {
            label: "Contact",
            url: "/contact",
        },
    ];

    return (
        <>
            <header className="sticky top-0 z-10 overflow-hidden shadow-[0_3px_11px_0px_rgba(0,0,0,0.25)] bg-white/70">
                <div className="backdrop-blur-md inset-x-0 bottom-[-50%] top-[-1px] absolute"></div>
                <nav className="relative">
                    <div className="container mx-auto px-6 lg:px-10 2xl:px-32 flex items-center justify-between py-2">
                        <Link href="#">
                            <Image
                                src="/logo.svg"
                                width={153}
                                height={76}
                                alt="Logo"
                            />
                        </Link>
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="lg:hidden border p-2 rounded-md border-grey-600"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                            onClick={() => setCollapsed(true)}
                        >
                            <MenuIcon />
                        </button>
                        <div
                            className="hidden w-full lg:block md:w-auto"
                            id="navbar-default"
                        >
                            <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-3 md:mt-0">
                                {headerMenu.map((menu) => {
                                    return (
                                        <li
                                            key={menu.label}
                                            className="cursor-pointer hover:bg-primary/[0.18] px-3 py-1 h-fit hover:rounded-md"
                                        >
                                            <span className="font-medium text-base">
                                                {menu.label}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div
                className={`lg:hidden block relative z-20 ease-in-out duration-500 ${
                    !collapsed && "opacity-0 invisible"
                }`}
                aria-labelledby="slide-over-title"
                role="dialog"
                aria-modal="true"
            >
                <div
                    className={`fixed inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity ease-in-out duration-500 ${
                        !collapsed ? " opacity-0" : "visible"
                    }`}
                ></div>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                            <div
                                className={`pointer-events-auto w-screen max-w-[270px] md:max-w-xs ease-in-out duration-500 sm:duration-700 ${
                                    !collapsed
                                        ? "transform transition opacity-0 translate-x-full"
                                        : "visible"
                                }`}
                            >
                                <div className="h-full overflow-y-scroll bg-white shadow-xl">
                                    <div className="overflow-y-auto py-6">
                                        <div className="flex items-center justify-between px-4">
                                            <Image
                                                src="/logo.svg"
                                                width={92}
                                                height={46}
                                                alt="Logo"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setCollapsed(false)
                                                }
                                                className="p-2 border border-black/50 rounded-full"
                                            >
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="mt-5">
                                            <ul className="">
                                                {headerMenu.map((menu) => {
                                                    return (
                                                        <li
                                                            key={menu.label}
                                                            className="cursor-pointer hover:bg-primary/[0.18] px-4 py-2 border-b border-black/5"
                                                        >
                                                            <span
                                                                onClick={() => {
                                                                    setCollapsed(
                                                                        false,
                                                                    );
                                                                }}
                                                                className="font-normal text-sm"
                                                            >
                                                                {menu.label}
                                                            </span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
