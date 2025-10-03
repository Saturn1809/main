"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Careers", link: "/career" },
    { name: "Contact Us", link: "/contactus" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navbar */}
        <NavBody>



          <NavbarLogo/>

          
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              render: (
                <Link key={item.name} href={item.link} className="hover:text-green-600">
                  {item.name}
                </Link>
              ),
            }))}
          />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="/register">Register Now</NavbarButton>
            <NavbarButton
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <PhoneCallIcon size={20} /> +91 7388783338
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#4BAF47] dark:text-neutral-300 py-2"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
