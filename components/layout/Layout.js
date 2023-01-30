import React from "react";
import Link from "next/link";
import { Header } from "components/header/header";
// import Footer from "components/footer/footer";
import Head from "next/head";
import Script from "next/script";
export const Layout = ({ children }) => (
  <>

    <Header />
    <div className="container mx-auto px-4">{children}</div>
    {/* <Footer /> */}
    <Script
      defer
      src='https://static.cloudflareinsights.com/beacon.min.js'
      data-cf-beacon='{"token": "cd226e487bbb454bad158c46e7140e69"}' />
  </>
);
