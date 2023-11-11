
import Link from 'next/link';
import {
    FaSearch, FaUser, FaEnvelope, FaBuilding, FaCamera, FaComment, FaTimes, FaFacebook, FaTwitter, FaLinkedin,
    FaPen, FaStar, FaClock, FaFileAlt, FaPaperPlane, FaEdit, FaSave, FaTrash, FaCog
} from 'react-icons/fa';
import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import Updateform from '@/pages/myacount/Updateform';
import Contact from '../Contact'
export default function Section0() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const router = useRouter();
    const toggleContact = () => {
        setShowContact(!showContact);
      };
      
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleForm = () => {
    setIsMenuOpen(false);
    setIsFormOpen(!isFormOpen);
      };
        
    return (
        <>
            <div className="section0-container">
                <Link href=""><FaUser className='user-account-icon' size={45} onClick={toggleMenu} /></Link>
                {isMenuOpen && (
                    <div className="account-menu-container">
                        <div className=" icon-menubar px-4 py-2">
                            <FaTimes className=" icon-close-menubar text-xl text-black cursor-pointer" onClick={toggleMenu} />
                        </div>
                        <div className="px-4 py-2 menu-item ">
                            <div className="account-searchbar">
                                <input type="text" placeholder="Rechercher" className="input-account" />
                                <Link href=""><FaSearch className='search-account-icon' size={30} /></Link>
                            </div>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaFileAlt className='menuaccount-icon' />
                            <Link href="" >Nouvels articles</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaPen className='menuaccount-icon' />
                            <Link href="" >Nouveau message</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaStar className='menuaccount-icon' />
                            <Link href="" >Messages suivis</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaClock className='menuaccount-icon' />
                            <Link href="" >En attente</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaPaperPlane className='menuaccount-icon' />
                            <Link href="" >Messages envoyés</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaEdit className='menuaccount-icon' />
                            <Link href="" >Brouillons</Link>
                        </div>

                        <div className="px-4 py-2 menu-item account-item">
                            <FaSave className='menuaccount-icon' />
                            <Link href="" >Enregistrements</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaTrash className='menuaccount-icon' />
                            <Link href="" >Corbeille</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaCog className='menuaccount-icon' />
                            <Link href="" >Paramètres</Link>
                        </div>
                        <div className="px-4 py-2 menu-item account-item">
                            <FaUser className='menuaccount-icon' />
                            <Link href="" onClick={toggleForm }>Confidentialité</Link>
                        </div>
                        
                        <div className="icons">
                            <Link href="https://www.facebook.com"><FaFacebook className="icon fb-icon" /></Link>
                            <Link href="https://www.twitter.com"><FaTwitter className="icon twitter-icon" /></Link>
                            <Link href="mailto:contact@frequence-medicale.com"><FaEnvelope className="icon mail-icon" /></Link>
                            <Link href="https://www.Linkedin.com"><FaLinkedin className="icon linkedin-icon" /></Link>
                        </div>
                    </div>
                )}
                <div className='account-txt'>
                    <h1 className='account-txt-f1'>Fréquence medicale</h1>
                    <h3 className='account-txt-f3'> Site d'information exclusivement pour les médecins</h3>
                </div>
                <div className="user-functions">
                    <div className="function-icons">
                        <Link href="" onClick={toggleContact}><FaEnvelope className='function-icon' size={24} /></Link>
                        <h3>Contact</h3>
                    </div>
                    <div className="function-icons">
                        <Link href=""><FaComment className='function-icon' size={24} /></Link>
                        <h3>Chat</h3>
                    </div>
                    <div className="function-icons">
                        <Link href=""><FaBuilding className='function-icon' size={24} /></Link>
                        <h3>Espace</h3>
                    </div>
                    <div className="function-icons">
                        <Link href=""><FaCamera className='function-icon' size={24} /></Link>
                        <h3>Réunion</h3>
                    </div>
                </div>
                {isFormOpen && 
                        <div className="create-account-modal"><Updateform /></div>}
                


            </div>
            {showContact && <Contact />}
        </>
    )
}