
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
const ConnectBtn: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleConnectClick = () => {
    setShowForm(!showForm);
  };
  const handleCloseClick = () => {
    setShowForm(false);
  };

  return (
    <div className="connectBtn relative">
      <button
        className="connect-btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleConnectClick}
      >
        Se Connecter
      </button>

      {showForm && (
        <div className="connection-form bg-white shadow-md p-4 absolute right-0 mt-2">
          <form>
            <span className="close-icon" onClick={handleCloseClick}>
              <FaTimes />
            </span>
            <div className="myinput">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="myinput">
              <label htmlFor="password">Mot de passe:</label>
              <input type="password" id="password" />
            </div>
            <button className=" se-connecter bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2">
              se connecter
            </button>
            <div className="others">
              <p className="other-way"><Link href="">Pas encore de compte ?</Link></p>
              <p className="other-way"><Link href="">Mot de passe oublié ?</Link></p>
            </div>
          </form>
          <div className="icons">
              <Link href="https://www.facebook.com"><FaFacebook className="icon fb-icon" /></Link>
              <Link href="https://www.twitter.com"><FaTwitter className="icon twitter-icon" /></Link>
              <Link href="mailto:contact@frequence-medicale.com"><FaEnvelope className="icon mail-icon" /></Link>
              <Link href="https://www.Linkedin.com"><FaLinkedin className="icon linkedin-icon" /></Link>
            </div>
        </div>
      )}
    </div>
  );
};

export default ConnectBtn;



