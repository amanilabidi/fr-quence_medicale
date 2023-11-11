import { FaHome } from 'react-icons/fa';
import Image from "next/image"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import ProposNewsletter from '@/components/sections/section3parts/ProposNwesletter';
export default function congres() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentTitle, setCurrentTitle] = useState("");

    const images = [
        { src: "/images/right1.jpg", title: "Penser reconditionnement à l'effort" },
        { src: "/images/right2.jpg", title: "Urgences… Quelle urgence ?" },
        { src: "/images/right3.jpg", title: "La Chirurgie esthétique, comment en parler aux patients" },
        { src: "/images/right4.jpg", title: "Bronchiolite, la 3ème épidémie" },

    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setCurrentTitle(images[currentImage].title);
    }, [currentImage])
    return (
        <>
            <h1 className="post1-title">Congrès</h1>
            <div className="home">
                <FaHome className="home-icon" />
                <p className="home-text"> Accueil /Congrès</p>
            </div>
            <div className="section2-post1">
                <div className="left-post1">
                    <div className="left-part1">
                        <div className="small-title-congres">
                            <h3 className="title-congres"><Link href="">asco 2023</Link></h3>
                        </div>
                        <div className="congres-articles">

                            <div className="congres-article">
                                <Image
                                    src={"/images/congres1.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-congres-element">
                                    <h3 className="title-congres-article"><Link href="">CBNPC muté EGFR: intéret du l'adjuvant et du néoadjuvant</Link></h3>
                                </div>
                            </div>
                            <div className="congres-article">
                                <Image
                                    src={"/images/congres2.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-congres-element">
                                    <h3 className="title-congres-article"><Link href="">Myélome: intéret du traitement précore</Link></h3>
                                </div>
                            </div>
                            <div className="congres-article">
                                <Image
                                    src={"/images/congres3.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-congres-element">
                                    <h3 className="title-congres-article"><Link href="">Cancer du sein triple négatif stade IA: apport réel des chimiothérapies</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left-part2">
                            <div className="small-title-congres">
                                <h3 className="title-congres"><Link href="">CPLF 2023</Link></h3>
                            </div>
                            <div className="congres-articles">

                                <div className="congres-article">
                                    <Image
                                        src={"/images/congres4.png"}
                                        alt="image1"
                                        width={180}
                                        height={150}
                                        className=""
                                    />
                                    <div className="title-congres-element">
                                        <h3 className="title-congres-article"><Link href="">Garde-t-on le même phénotype d'asthme au cours  ... </Link></h3>
                                    </div>
                                </div>
                                <div className="congres-article">
                                    <Image
                                        src={"/images/congres5.png"}
                                        alt="image1"
                                        width={180}
                                        height={150}
                                        className=""
                                    />
                                    <div className="title-congres-element">
                                        <h3 className="title-congres-article"><Link href="">Fibrose pulmonaire idiopathique: traitement ...</Link></h3>
                                    </div>
                                </div>
                                <div className="congres-article">
                                    <Image
                                        src={"/images/congres6.png"}
                                        alt="image1"
                                        width={180}
                                        height={150}
                                        className=""
                                    />
                                    <div className="title-congres-element">
                                        <h3 className="title-congres-article"><Link href="">CBNPC résécable: évolution de la stratégie</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div className="right-post1">
          <div className="right-post">
            <h2 className="small-title"><Link href="" target="_blank">LA CHAÎNE SANTÉ</Link></h2>
            <div className="image-slider">
              <Image
                src={images[currentImage].src}
                alt={`Image ${currentImage + 1}`}
                width={300}
                height={100}
                className="myimages" />
            </div>
            <div className="mytitle">
              <h2 className="scroll-title"><Link href="">{currentTitle}</Link></h2>
            </div>
          </div>
          <div className="mini-post-actualite">
            <div className='mini-post-title'>
              <h1>ACTUALITÉS</h1>
            </div>
            <div className='mini-posts'>
              <div className='mini-post'>
                <Image
                  src={"/images/miniactualite1.jpg"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Fortes chaleurs : la question de l'adaptation médicamenteuse</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p>07 Jul 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/mini-actualite2.jpg"}
                  alt="image1"
                  width={105}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Greffes d’organes : une avancée pour gérer les ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p>06 Jul 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/miniactualite3.jpg"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Ostéoporose : les nouvelles recommandations alimentaires de...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p>07 Jul 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mini-post-actualite">
            <div className='mini-post-title'>
              <h1>CLINIQUE</h1>
            </div>
            <div className='mini-posts'>
              <div className='mini-post'>
                <Image
                  src={"/images/image4.png"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Patient insuffisant cardiaque stable : Risques de ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 27 Mai 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/clinique2.png"}
                  alt="image1"
                  width={120}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Une urticaire qui résiste au traitement ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p>06 Mai 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/clinique3.png"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">1ère poussée d’insuffisance cardiaque chez un ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 22 Avr 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mini-post-actualite">
            <div className='mini-post-title'>
              <h1>DÉCRYPTAGE</h1>
            </div>
            <div className='mini-posts'>
              <div className='mini-post'>
                <Image
                  src={"/images/image6.png"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Somnolence diurne récurrente : évoquer une ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 04 Jul 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/decryptage1.jpg"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">HTA de la personne âgée : faut-il la contrôler ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p>23 Jun 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/decryptage3.png"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Cancer du sein RH+/HER2- : Intérêt d’un ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 15 Jun 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mini-post-actualite">
            <div className='mini-post-title'>
              <h1>PATIENTS</h1>
            </div>
            <div className='mini-posts'>
              <div className='mini-post'>
                <Image
                  src={"/images/patient1.jpeg"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Dermite séborrhéique : une maladie inflammatoire ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 05 Jul 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/patient2.jpg"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Maladie de Vaquez : la polyglobulie augmente le ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 03 Jul 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/patient3.jpg"}
                  alt="image1"
                  width={120}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Myopie : une anomalie de la vision de ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p>30 Jun 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        </>
    )
}