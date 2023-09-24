import "antd/dist/antd.less";
import "@styles/global.scss";
import App, { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { useState } from "react";
import { Provider, useStore } from "react-redux";
import { LayoutContextProvider } from "src/contexts/layoutContext";
import ErrorComponent from "src/containers/error/errorComponent";
import { wrapper } from "@redux/store";
import { AppContextType } from "next/dist/shared/lib/utils";
import { DefaultSkeleton } from "@components/theme";

const Noop = ({ children }: { children: JSX.Element }) => children;

const MyApp = ({
    Component, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Component: { Layout = Noop, ...restLayoutProps },
    pageProps,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
AppProps | any): JSX.Element => {
    const { statusCode = 200 } = pageProps || {};
    const [isLoading, setIsLoading] = useState(false);
    const store = useStore();

    Router.events.on("routeChangeStart", (/*url*/) => {
        setIsLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
        setIsLoading(false);
    });
    Router.events.on("routeChangeError", () => {
        setIsLoading(false);
    });
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <title>
                    {restLayoutProps?.MetaData?.title
                        ? `${restLayoutProps?.MetaData?.title}`
                        : "Real Property Solution"}
                </title>
                <meta name="description" content="Real Property Solutions   " />
                <meta name="keywords" content="Real Property Solutions" />
                {/* <link href="/images/Sparrow-Favicon-Icon.png" rel="icon" /> */}
                {process.env.NEXT_ENV !== "production" && (
                    <meta name="robots" content="noindex,nofollow" />
                )}
                <style>
                    {typeof window === "undefined" &&
                        `
                        svg {
                            width: 32px;
                            height: 32px;
                        }
                    `}
                </style>
            </Head>
            <Provider store={store}>
                <LayoutContextProvider>
                    {statusCode === 200 && (
                        <>
                            <Layout {...restLayoutProps}>
                                {isLoading && (
                                    <>
                                        <div>
                                            <DefaultSkeleton isContent={true} />
                                        </div>
                                    </>
                                )}
                                {!isLoading && <Component {...pageProps} />}
                            </Layout>
                        </>
                    )}
                    {!isLoading && statusCode !== 200 && (
                        <ErrorComponent {...pageProps} />
                    )}
                </LayoutContextProvider>
            </Provider>
        </>
    );
};

MyApp.getInitialProps = wrapper.getInitialPageProps(
    (store) => async (appContext: AppContextType | any) => {
        const ctx = appContext.ctx;
        let appProps: any = {};
        if (appContext.ctx.req) {
            // This Line will trigger component level getInitialProps
            appProps = await App.getInitialProps(appContext);
        }

        return { ...appProps };
    },
);

export default wrapper.withRedux(MyApp);
