import Link from "next/link";

export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <Link
        href={href}
        className={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
      >
        {children}
      </Link>
    </li>
  )
}