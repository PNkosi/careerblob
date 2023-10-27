import { UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "@/lib/components-static-data";
import MobileMenuTrigger from "./MobileMenuTrigger";
import clsx from "clsx";
import Button from "./Button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="relative  z-50 h-[10dvh] backdrop-blur-sm bg-violet-900/50 flex items-center">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="hidden md:block text-light-purple">
            {navLinks.map(({text, href}, index) => (
                <Link className="px-8 hover:text-cyan-blue transition-all" key={index} href={href}>{text}</Link>
            ))}
        </div>
        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
          <Button href="/sign-in" className="bg-cyan-blue">Sing in</Button>
          <Button href="/sign-up" className="bg-white hidden md:inline-block">Sing up</Button>
          <MobileMenuTrigger />
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
