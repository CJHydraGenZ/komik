import React from "react";
import Link from "next/link";
import { Header } from "components/header/header";
import Footer from "components/footer/footer";
export const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container mx-auto px-4">{children}</div>
    <Footer />
  </>
);
