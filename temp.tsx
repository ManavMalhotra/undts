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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between space-x-8 mx-8 md:mx-16 my-8">
      <div>Logo</div>

      <div className="hidden md:flex gap-16">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">
              <Dropdown
                title="Services"
                list={["Service1", "Service1", "Service1"]}
              />
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <Dropdown
                title="Projects"
                list={["Projects1", "Projects1", "Projects1"]}
              />
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <Dropdown
                title="About Us"
                list={["About Us1", "About Us2", "About Us3"]}
              />
            </Link>
          </li>
        </ul>
        <div>
          <button>Contact us</button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden gap-4">
        <button>Contact us</button>
        <button onClick={() => setIsOpen(!isOpen)}>
          <MdMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-full max-w-sm px-8 py-8 bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            title="Contact us"
            className="btn bg-black text-white font-light rounded-full"
          >
            Contact us
          </button>

          <Link
            className="flex items-center gap-2 shrink-0 "
            title={`${config.companyName} homepage`}
            href="/"
          >
            <Image
              src={logo}
              alt={`${config.companyName} logo`}
              className="w-16"
              priority={true}
              width={40}
              height={40}
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <MdClose className="w-8 h-8" />
          </button>
        </div>

        {/* Links/Content on small screens */}
        <div className="flex flex-col justify-between mt-8 gap-8">
          <div className="flex flex-col items-start gap-4">
            <ul className="flex gap-4 flex-col">
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
            <h6 className="text-gray-400 text-sm">Reach out to us</h6>
            <h6 className="underline">info@udts.com</h6>
          </div>

          <div>
            <h5 className="my-4">
              India’s most reliable corrosion prevention service company
            </h5>

            <div className="flex gap-4 justify-evenly my-4">
              <FaInstagram size={24} />
              <FaLinkedin size={24} />
              <FaFacebook size={24} />
              <FaXTwitter size={24} />
              <FaYoutube size={24} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
