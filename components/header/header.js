import React from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
export const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      {/* <Navbar.Brand href="https://flowbite.com/"> */}
      <Link href={`/`}>
        <a>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            KomikIDC
          </span>
        </a>
      </Link>
      {/* </Navbar.Brand> */}
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* <Navbar.Link href="/komik" active={true}> */}
        <Link href={`/komik`}>
          <a>Daftar komik</a>
        </Link>
        {/* </Navbar.Link> */}
        {/* <Navbar.Link href="/navbars"> */}
        <Link href={`/about`}>
          <a>About</a>
        </Link>
        {/* </Navbar.Link> */}
        {/* <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
