import React from "react";
// import { Navbar } from "flowbite-react";
// import Link from "";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        <Link href={`/`}>KomikIDC</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          {/* <li><Link href={`/`}>KomikIDC</Link></li> */}
          <li tabIndex={0}>
            <Link href={`/komik`}>
              Daftar Komik
            </Link>

          </li>
          <li><Link href={`/roadmap`}>Roadmap</Link></li>
        </ul>
      </div>
    </div>
  );
};
