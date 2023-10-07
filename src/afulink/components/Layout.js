import React from "react";
import Head from "next/head";

const Layout = ({ children, pageTitle, favicon = "./favicon.svg" }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-adsense-account" content="ca-pub-3182119963461273"></meta>
        <link rel="shortcut icon" href={favicon} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3182119963461273"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
