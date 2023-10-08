import React from "react";
import { Header } from "./header/headerComponent";
import { Footer } from "./footer/footer";

export const MainLayoutComponent: React.FC = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
