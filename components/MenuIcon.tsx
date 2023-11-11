

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import ConnectBtn from "./ConnectBtn";
import { FaFacebook, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
const MenuIcon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const router = useRouter();
  const handleClick1 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    closeMenu();
    router.push("./menubarposts/Actualite");
  };
  const handleClick2 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    closeMenu();
    router.push("./menubarposts/Jdf");
  };
  const handleClick3 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    closeMenu();
    router.push("./menubarposts/Clinique");
  };
  const handleClick4 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    closeMenu();
    router.push("./menubarposts/Decryptage");
  };
  const handleClick5 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    closeMenu();
    router.push("./menubarposts/Prodcast");
  };
  const handleClick6 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    closeMenu();
    router.push("./menubarposts/Congres");
  };
  const handleClick7 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    closeMenu();
    router.push("./menubarposts/Contact");
  };
  const handleLogout = () => {

    router.push("/");
  };
  return (
    <>
    <div className="relative">
      <div className="menu-icon">
        <FaBars className="text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className="menu-container">
          <div className=" icon-menubar px-4 py-2">
            <FaTimes className=" icon-close-menubar text-xl text-black cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="">
              <Image
                src={"/images/logo-fm-final.png"}
                alt="Logo"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="" onClick={handleClick1}>Actualités</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="" onClick={handleClick2}>JDF</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="" onClick={handleClick3}>Clinique</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="" onClick={handleClick4}>Décryptage</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="" onClick={handleClick6}>Congrès</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="" onClick={handleClick5}>Podcasts</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="">Parcours</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="">Partenaires</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <Link href="" onClick={handleClick7}>Contact</Link>
          </div>
          <div className="px-4 py-2 menu-item">
            <button className="deconnection  bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={handleLogout}>Se Déconnecter </button>
          </div>
          <div className="px-4 py-2 menu-item">

          </div>
          <div className="icons">
            <Link href="https://www.facebook.com"><FaFacebook className="icon fb-icon" /></Link>
            <Link href="https://www.twitter.com"><FaTwitter className="icon twitter-icon" /></Link>
            <Link href="mailto:contact@frequence-medicale.com"><FaEnvelope className="icon mail-icon" /></Link>
            <Link href="https://www.Linkedin.com"><FaLinkedin className="icon linkedin-icon" /></Link>
          </div>
        </div>
      )}
    </div>
    </>
    
  );
};

export default MenuIcon;

