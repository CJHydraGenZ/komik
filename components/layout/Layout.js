import React from "react";
import Link from "next/link";
import { Header } from "components/header/header";
import Footer from "components/footer/footer";
export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
