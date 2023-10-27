"use client";
import { navLinks } from "@/lib/components-static-data";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

const MobileMenuTrigger = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      {menuOpen ? (
        <>
          <VscClose
            className="text-light-purple md:hidden"
            size={20}
            onClick={handleClick}
          />
          <div className="absolute top-[15dvh] left-1/2 -translate-x-1/2 w-[80dvw] backdrop-blur-lg bg-violet-900/95 text-light-purple flex flex-col gap-8 p-8 rounded-lg text-center md:hidden border-[0.5px] border-dark-purple">
            {navLinks.map(({ text, href }, index) => (
              <Link
                className="hover:text-cyan-blue transition-all"
                key={index}
                href={href}
              >
                {text}
              </Link>
            ))}
            <Link href='/sign-up'>Sign up</Link>
          </div>
        </>
      ) : (
        <CiMenuFries
          className="text-light-purple md:hidden"
          size={20}
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default MobileMenuTrigger;
