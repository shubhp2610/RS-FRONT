import { MainLayoutComponent } from "@components/layout/mainLayout/mainLayoutComponent";
import React from "react";
import { HomeScene } from "./homeScene";

const HomeContainer = () => {
    return <HomeScene />;
};

HomeContainer.Layout = MainLayoutComponent;
export default HomeContainer;

HomeContainer.MetaData = {
    title: "Home",
    description: "Home",
};
