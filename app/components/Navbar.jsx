"use client";

import { Bell, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../../public/netflix_logo.svg";
import UserNav from "./UserNav";

const links = [
  { id: 1, name: "Home", href: "/home" },
  { id: 2, name: "TV Shows", href: "/tv-shows" },
  { id: 3, name: "Movies", href: "/movies" },
  { id: 4, name: "Recently Added", href: "/recently-added"},
  { id: 5, name: "My List", href: "/my-list" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-5 lg:px-8">
      <div className="flex items-center">
        <Link href={"/"} className="w-32">
          <Image src={Logo} alt="Netflix Logo" priority />
        </Link>

        <ul className="hidden lg:flex gap-x-4 ml-14">
          {links.map((link) => (
            <div key={link.id} className="text-white  font-sm">
              {pathname === link.href ? (
                <li>
                  <Link href={link.href} className="text-white underline">
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-6">
        <SearchIcon className="w-5 h-5 text-gray-300 cursor-pointer"/>
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer"/>
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
