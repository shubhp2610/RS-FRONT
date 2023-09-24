import React from "react";
import { Header } from "./header/headerComponent";
import { Footer } from "./footer/footer";

export const MainLayoutComponent: React.FC = ({ children }: any) => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-6 lg:px-10 2xl:px-32">
                {children}
                <Footer />
            </div>
        </>
    );
};
