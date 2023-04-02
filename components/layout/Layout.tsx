import React from "react";
import Link from "next/link";
// import Head from 'next/head';
import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";
import { Header } from "components/header/header";
// import Footer from "components/footer/footer";
import Script from "next/script";
export const Layout = ({ children }: any) => (
  <>
    {/* <main>...</main> */}
    <Header />
    <div className="container mx-auto px-4 ">{children}</div>
    {/* <Footer /> */}
    {/* <Script type="text/partytown" /> */}
  </>
);
