"use client";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  return (
    <>
      <section id="header">
        <div
          className={
            isHomepage
              ? "wpo-site-header wpo-header-style-2"
              : "wpo-site-header wpo-header-style-3"
          }
        >
          <NavBar />
        </div>
      </section>
    </>
  );
};

export default Header;
