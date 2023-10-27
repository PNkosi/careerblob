import { navLinks } from "@/lib/components-static-data";
import Link from "next/link";
import { RiFacebookLine, RiTiktokLine, RiLinkedinLine } from "react-icons/ri";
import Logo from "./Logo";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border-t-2 border-dark-purple py-6 container text-light-purple">
        <section className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex gap-2 items-center">
              Follow us
              <Link className="border-2 border-cyan-blue p-2 rounded-full" href="https://linkedin.com">
                <RiLinkedinLine />
              </Link>
              <Link className="border-2 border-cyan-blue p-2 rounded-full" href="https://facebook">
                <RiFacebookLine />
              </Link>
              <Link className="border-2 border-cyan-blue p-2 rounded-full" href="https://tiktok.com">
                <RiTiktokLine />
              </Link>
            </p>
            <p>
              Developed by{" "}
              <Link href="https://github.com/PNkosi">Perfect Nkosi</Link>
            </p>
          </div>
        </section>
        <small className="flex items-center gap-2 justify-center py-4"><Logo /> Copyright. {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
