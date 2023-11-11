

import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Image from 'next/image';
import Link from 'next/link';
const Section1 = () => {
    const [showOptions1, setShowOptions1] = useState(false);
    const [showOptions2, setShowOptions2] = useState(false);
    const [showSpecialities, setShowSpecialities] = useState(false);
    const handleMedtvClick = () => {
        setShowOptions1(!showOptions1);
    };
    const handlepatientstvClick = () => {
        setShowOptions2(!showOptions2);
    };


    const handleSpecialitesClick = () => {
        setShowSpecialities(!showSpecialities);
        
    }
    return (
        <div className="section1-container">
            <div className=" section1-btn">
                <span className="span-link" onClick={handleSpecialitesClick}>Specialités</span>
                <span className="span-link" onClick={handleMedtvClick}>
                    MEDTV
                </span>
                <span className="span-link" onClick={handlepatientstvClick}>Education Patients</span>

            </div>
            {showOptions1 && (
                <div className="options1 flex flex-col">
                    <div > <Link href="/option1" >JEUDIS DE LA FORMATION</Link></div>
                    <div > <Link href="/option2" >JEUDIS DES PROFFESSIONALITES</Link></div>
                    <div > <Link href="/option3" >LAMEDECINE AU FEMININ</Link></div>
                    <div > <Link href="/option3" >MERCREDIS DE LA PRATIQUES</Link></div>
                    <div> <Link href="/option3" >UNIVERS DE MEDECIN </Link></div>
                    <div ><Link href="/option3" >MARDIS DE A TERMOBOSE</Link></div>
                </div>
            )}
            {showOptions2 && (
                <div className="options2 flex flex-col">
                    <div > <Link href="/option1" >VOS PATIENTS ONT LU</Link></div>
                    <div > <Link href="/option2" >PAROLE DES PATIENTS</Link></div>
                    <div > <Link href="/option3" >FICHE PATIENTS</Link></div>

                </div>
            )}
            {showSpecialities && (
                <div className='specialities'>
                    <div className='speciality'>
                        <h3 className='speciality-name'>CARDIOLOGIE</h3>
                        <Image
                            src={"/images/cardiologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>DERMATOLOGIE</h3>
                        <Image
                            src={"/images/dermatologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>DIABETOLOGIE</h3>
                        <Image
                            src={"/images/diabetologie.jpeg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>HEMATOLOGIE</h3>
                        <Image
                            src={"/images/hematologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>GERIATERIE</h3>
                        <Image
                            src={"/images/geriaterie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>NEUROLOGIE</h3>
                        <Image
                            src={"/images/neurologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>ONCOLOGIE</h3>
                        <Image
                            src={"/images/oncologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>MEDECINE GENERALE</h3>
                        <Image
                            src={"/images/generaliste.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>UROLOGIE</h3>
                        <Image
                            src={"/images/urologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>PNEUMOLOGIE</h3>
                        <Image
                            src={"/images/pneumologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>RHUMATOLOGIE</h3>
                        <Image
                            src={"/images/rhumatologie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>
                    <div className='speciality'>
                        <h3 className='speciality-name'>PSY-ADDICTOLOGIE</h3>
                        <Image
                            src={"/images/psychiatrie.jpg"}
                            alt=""
                            width={130}
                            height={350}
                            className="speciality-image"
                        />
                    </div>

                </div>
            )}
            <div className='home-txt'>
                <h1 className='txt-f1'>Fréquence médicale</h1>
                <h3 className='txt-f3'> Site d'information exclusivement pour les médecins</h3>
            </div>
            <div className='mySearch'>
                <SearchBar />
            </div>
           
        </div>
    );
};

export default Section1;
