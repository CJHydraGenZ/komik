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
      defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f7f7486a92b9427ab52dde99f0bfe70a"}' />
  </>
);
