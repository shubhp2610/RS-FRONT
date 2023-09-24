import { createContext, useState } from "react";

export interface LayoutContextModel {
    collapsed: boolean;
    setCollapsed: (d: boolean) => void;
}

const initialState: LayoutContextModel = {
    collapsed: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCollapsed: () => {},
};

export const LayoutContext = createContext(initialState);

export const LayoutContextProvider = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <LayoutContext.Provider
            value={{
                collapsed,
                setCollapsed,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};
