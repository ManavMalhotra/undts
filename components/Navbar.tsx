"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdLightMode, MdMenu } from "react-icons/md";
import config from "@/config.json";
import logo from "@/app/logo.png";
import Dropdown from "./ui/Dropdown";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between col-span-4 my-8 md:col-span-8">
      {/* logo  */}
      <Image
        src={logo}
        alt="undts logo"
        className="w-24"
        priority={true}
        width={80}
        height={40}

      />
      <div className="hidden gap-8 md:flex">

        <NavigationMenu>
          <NavigationMenuList>
            {/* Home  */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base`}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Services  */}
            <NavigationMenuItem className="hover:bg-none">
              <NavigationMenuTrigger className="text-base ">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-6 md:w-[200px] lg:w-[300px] text list-disc">
                  <li className="">
                    <NavigationMenuLink asChild>
                      <Link href="/" legacyBehavior passHref>
                        <a>Corrosion Prevention</a>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/" legacyBehavior passHref>
                        <a>Coating Inspection</a>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Projects  */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base ">Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  Temp
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Us */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base`}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="#contact-us" className="px-4 py-2 text-lg text-white bg-black rounded-full">Contact Us</Link>
      </div>



      <div className="flex gap-4 md:hidden">
        <Link href="#contact-us" className="px-4 py-2 text-base text-white bg-black rounded-full">Contact Us</Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <MdMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu Start  */}
      <div
        className={`relative z-50 ${isOpen ? "" : "hidden"} transition-all `}
      >
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-4 py-10 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 
          sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300 bg-white`}
        >
          <div className="flex items-center justify-between">
            <Link href="#contact-us" className="px-4 py-2 text-base text-white bg-black rounded-full">Contact Us</Link>
            <Link
              className="flex items-center gap-2 shrink-0 "
              title={`${config.companyName} hompage`}
              href="/"
            ></Link>

            <button
              type="button"
              className="rounded-md ml-[0.6rem]"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>

              <MdClose size={24} />
            </button>
          </div>

          {/* Links/Content on small screens */}
          <div className="flex flex-col justify-between gap-8 mt-8 ">
            <div className="flex flex-col items-start gap-4">
              <ul className="flex flex-col gap-4">
                <li className="font-semibold">
                  <Link href="/">Projects</Link>
                </li>
                <li className="font-semibold">
                  <Link href="/">Company</Link>
                </li>
                <li className="font-semibold">
                  <Link href="/">Services</Link>
                </li>
                <li className="font-semibold">
                  <Link href="/">Certifications</Link>
                </li>
                <li className="font-semibold">
                  <Link href="/">Careers</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-sm text-gray-400">Reach out to us</h6>
              <h6 className="underline">info@udts.com</h6>
            </div>

            <div>
              <Image
                src={logo}
                alt={`${config.companyName} logo`}
                className="w-16 "
                priority={true}
                width={40}
                height={40}
              />

              <h5 className="my-4">
                India ’s most reliable corrosion prevention service company
              </h5>

              <div className="flex gap-4 my-4 justify-evenly">
                <FaInstagram size={24} />
                <FaLinkedin size={24} />
                <FaFacebook size={24} />
                <FaXTwitter size={24} />
                <FaYoutube size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
