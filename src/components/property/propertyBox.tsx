import React from "react";
import { LocationIcon } from "@components/theme/icons/Location";
import { BedsIcon } from "@components/theme/icons/BedsIcon";
import { BathIcon } from "@components/theme/icons/BathIcon";
import { LevelsIcon } from "@components/theme/icons/LevelsIcon";
import { SqtIcon } from "@components/theme/icons/SqtIcon";
import Link from "next/link";

export const PropertyBox = ({ data }: any) => {
    return (
        <>
            {data &&
                data.length > 0 &&
                data.map((d: any, index: number) => (
                    <div
                        className="mb-5 p-4 bg-white shadow-sm shadow-secondary rounded-lg"
                        key={index}
                    >
                        <div
                            className="relative mb-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            <img src={d.img} className="w-full" />
                            <Link href="/">
                                <div className="cursor-pointer mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                            </Link>
                        </div>
                        <span className="px-3 uppercase py-[2px] whitespace-nowrap rounded-full bg-primary/75 text-[11px] leading-none text-white">
                            {d.type}
                        </span>
                        <h5 className="mb-2 text-xl font-bold mt-2 cursor-pointer hover:text-primary">
                            {d.name}
                        </h5>
                        <div className="mb-3 flex items-center text-sm font-medium text-danger dark:text-danger-500 justify-start">
                            <LocationIcon className="mr-2" /> {d.address}
                        </div>
                        <p className="text-xl font-semibold mb-4">{d.price}</p>
                        <p className="text-neutral-500 dark:text-neutral-300">
                            {d.des}
                        </p>
                        <div className="flex items-center justify-around pt-4 border-t mt-5 border-t-grey-500">
                            <div>
                                <BedsIcon className="w-[28px] h-[28px]" />
                                <p className="grid text-center mt-1">
                                    <span className=" text-base font-semibold">
                                        Beds
                                    </span>
                                    <span className="text-sm font-medium">
                                        {d.detail.bed}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <BathIcon className="w-[28px] h-[28px]" />
                                <p className="grid text-center mt-1">
                                    <span className=" text-base font-semibold">
                                        Baths
                                    </span>
                                    <span className="text-sm font-medium">
                                        {d.detail.bath}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <LevelsIcon className="w-[28px] h-[28px]" />
                                <p className="grid text-center mt-1">
                                    <span className=" text-base font-semibold">
                                        Levels
                                    </span>
                                    <span className="text-sm font-medium">
                                        {d.detail.levels}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <SqtIcon className="w-[28px] h-[28px]" />
                                <p className="grid text-center mt-1">
                                    <span className=" text-base font-semibold">
                                        Sqft
                                    </span>
                                    <span className="text-sm font-medium">
                                        {d.detail.sqft}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};
