import CreateAcount from "@/components/CreateAcount";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FiCircle } from 'react-icons/fi';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
export default function ProposNewsletter() {
    const [showCreateAccount, setShowCreateAccount] = useState(false);

    const handleCreateAccountClick = () => {
        setShowCreateAccount(true);
    };
    return (
        <>
            <div className="propos-newsletter">
                <div className="propos">
                    <div className="footer-title">
                        <span className="myfooter-title">à propos</span>
                    </div>
                    <div className="propos-container">
                        <div className="propos-lines">
                            <FiCircle className="dot-icon" />
                            <h4 className="title-propos-line"><Link href="">Données personnelles et cookies</Link></h4>
                        </div>
                        <div className="propos-lines">
                            <FiCircle className="dot-icon" />
                            <h4 className="title-propos-line"><Link href="">Charte éditoriale</Link></h4>
                        </div>
                        <div className="propos-lines">
                            <FiCircle className="dot-icon" />
                            <h4 className="title-propos-line"><Link href="">Conditions d'utilisation</Link></h4>
                        </div>
                        <div className="propos-lines">
                            <FiCircle className="dot-icon" />
                            <h4 className="title-propos-line"><Link href="">Qui sommes nous</Link></h4>
                        </div>
                        <div className="propos-lines">
                            <FiCircle className="dot-icon" />
                            <h4 className="title-propos-line"><Link href="">Mentions légales</Link></h4>
                        </div>
                        <div className="propos-lines">
                            <FiCircle className="dot-icon" />
                            <h4 className="title-propos-line"><Link href="">Nous contacter</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="newsletter">
                    <div className="footer-title">
                        <span className="myfooter-title">newsletter</span>
                    </div>
                    <div className="newsletter-container">
                        <p className="newsletter-txt">Afin de recevoir toutes nos Newsletters, veuillez créer un compte</p>
                        <button className="newsletter-btn" onClick={handleCreateAccountClick}>créer un compte</button>
                    </div>
                </div>

                <div className="freq-medicale-info">
                    <div className="footer-title">
                        <h3 className="myfooter-title">Fréquence médicale</h3>
                    </div>
                    <div className="newsletter-container">
                        <div className="location">
                            
                                <FaMapMarkerAlt size={20}/>
                                <p className="newsletter-txt">Adresse : 215 Av. Georges Clemenceau, 92000 Nanterre, France</p>
                           

                        </div>

                        <div className="phone">
                            <FaPhone />
                            <p className="newsletter-txt">Téléphone : +33 1 84 20 12 20</p>
                        </div>


                    </div>
                </div>
                <div className="freq-medicale-desc">
                    <Image
                        src={"/images/logo-fm-final.png"}
                        alt="Logo"
                        width={120}
                        height={30}
                        className="h-8 w-auto"
                    />
                    <p>Le site santé de référence avec chaque jour toute l'actualité médicale decryptée par des médecins en
                        exercice et les conseils des meilleurs spécialistes.
                    </p>
                </div>
            </div>
            {showCreateAccount && <CreateAcount />}
        </>
    )
}