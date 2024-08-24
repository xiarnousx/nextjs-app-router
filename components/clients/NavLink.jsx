"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();
  const className = (parts) => (path.startsWith(parts) ? "active" : "");
  return (
    <Link href={href} className={className(href)}>
      {children}
    </Link>
  );
}

export default NavLink;
