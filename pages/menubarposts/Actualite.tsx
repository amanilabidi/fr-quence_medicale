import { FaHome } from 'react-icons/fa';
import Image from "next/image"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import ProposNewsletter from '@/components/sections/section3parts/ProposNwesletter';
export default function Actualite() {
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
            <h1 className="post1-title">Actualités</h1>
            <div className="home">
                <FaHome className="home-icon" />
                <p className="home-text">Accueil / Actualités</p>
            </div>
            <div className="section2-post1">
                <div className="left-post1">
                    <div className="post1-section1-left">
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/actualite1.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Zona : la France très en retard sur la vaccination</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 07.07.2023 |Par le Dr Clothilde Bonnet</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>

                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/miniactualite1.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Fortes chaleurs : la question de l'adaptation méd...</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 06.05.2023 |Par  le Dr Jean-Paul Marre</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/mini-actualite2.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Greffes d’organes : une avancée pour gérer les traitements</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 06.07.2023 |Par Margot Montpezat</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/miniactualite3.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Ostéoporose : les nouvelles recommandations alimentaires </h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 06.07.2023 |Par Mégane Fleury</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/actualite2.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Diabète de type 1 : les cas pédiatriques en forte hausse depuis la Covid-19</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 05.07.2023 |Par Mégane Fleury</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/actualite3.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Épilepsie : alerte de l'ANSM sur la lamotrigine</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 05.07.2023 |Par Mégane Fleury</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/actualite4.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Troubles du sommeil et anxiété : quel impact sur la grossesse ?</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 05.07.2023 |Par Mégane Fleury</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/actualite5.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Maladie d'Alzheimer : tout ce qu'il faut savoir sur l'immunothérapie anti-amyloïde</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 05.07.2023 |Par le Dr Clothilde Bonnet</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                        <div className="mercredi-posts">
                            <Image
                                src={"/images/actualite6.jpg"}
                                alt="image1"
                                width={150}
                                height={200}
                                className="image-conainer-post"
                            />
                            <div className="mercredi-text">
                                <h1>Partie 2 : Covid, mi-temps, prolongationou fin du match</h1>
                                <div className="post1-description">
                                    <FiClock className='icon-desc' />
                                    <p>Publié le 10.12.2021</p>
                                </div>
                            </div>
                            <div className="mercredi-btn">
                                <button className='left-post1-btn'>Lire La Vidéo</button>
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <Link href="#" className='number'>&laquo;</Link>
                        <Link href="#" className='active number'>1</Link>
                        <Link href="#" className='number'>2</Link>
                        <Link href="#" className='number'>3</Link>
                        <Link href="#" className='number'>4</Link>
                        <Link href="#" className='number'>5</Link>
                        <Link href="#" className='number'>6</Link>
                        <Link href="#" className='number'>&raquo;</Link>
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
              <h1>CONGRÈS</h1>
            </div>
            <div className='mini-posts'>
              <div className='mini-post'>
                <Image
                  src={"/images/congres1.png"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Cancer du sein triple négatif stade IA : apport ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p>13 Jun 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/congres2.png"}
                  alt="image1"
                  width={120}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">Myélome : intérêt du traitement précoce</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 13 Jun 2023</p>
                  </div>
                </div>
              </div>
              <div className='mini-post'>
                <Image
                  src={"/images/congres3.png"}
                  alt="image1"
                  width={130}
                  height={150}
                  className="image-conainer-post"
                />
                <div className="actualite-text">
                  <h3><Link href="">CBNPC avec ou sans biomarqueurs : intérêt de ...</Link></h3>
                  <div className="post1-description">
                    <FiClock className='icon-desc' />
                    <p> 13 Jun 2023</p>
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