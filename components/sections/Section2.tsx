import Image from "next/image"
import React from 'react';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import { useRouter } from "next/router";


export default function Section2() {
    const router = useRouter();

    const handleClick1 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push("./section2posts/Post1");
    };
    const handleClick2 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push("./section2posts/Post2");
    };
    const handleClick3 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push("./section2posts/Post3");
    };
    const handleClick4 = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push("./section2posts/Post4");
    };
    return (
        <>

            <section className="section2-container">
                <div className="mycontainer">
                    <div className="mynews">
                        <div className="myimage-news">
                            
                                    <Image
                                        src={"/images/image1.png"}
                                        alt="image1"
                                        width={400}
                                        height={220}
                                        className="image-conainer-post"

                                    />
                            
                        </div>
                        <div className="mytxt-news">
                            <span className="color-slider">Les mercredis de la pratique</span>
                            <h3 className="post-title"><Link href="" rel="bookmark">Patient insuffisant cardiaque stable</Link></h3>
                            <div className="post-date">
                                <FiClock className="icon-date" />
                                <p className="date">  29  Jun  2023</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mycontainer">
                    <div className="mynews">
                        <div className="myimage-news">
                                
                                    <Image
                                        src={"/images/image2.png"}
                                        alt="image1"
                                        width={400}
                                        height={220}
                                        className="image-conainer-post "
                                    />
                                
                        </div>
                        <div className="mytxt-news">
                            <span className="color-slider">Jeudis des professions de santé</span>
                            <h3 className="post-title"><Link href="./section2posts/Post2" onClick={handleClick2}>L’Invalidité: Qu’est-ce que c’est ?...</Link></h3>
                            <div className="post-date">
                                <FiClock className="icon-date" />
                                <p className="date">  29  Jun  2023</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mycontainer">
                    <div className="mynews">
                        <div className="myimage-news">
                                
                                    <Image
                                        src={"/images/image3.png"}
                                        alt="image1"
                                        width={400}
                                        height={220}
                                        className="image-conainer-post"
                                    />
                                
                        </div>
                        <div className="mytxt-news">
                            <span className="color-slider">Jeudis de la Formation</span>
                            <h3 className="post-title"><Link href="./section2posts/Post3" onClick={handleClick3}>Les troubles de la personnalité :</Link></h3>
                            <div className="post-date">
                                <FiClock className="icon-date" />
                                <p className="date">  29  Jun  2023</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mycontainer">
                    <div className="mynews">
                        <div className="myimage-news">
                               
                                    <Image
                                        src={"/images/image5.png"}
                                        alt="image1"
                                        width={400}
                                        height={220}
                                        className="image-conainer-post"
                                    />
                                
                        </div>
                        <div className="mytxt-news">
                            <span className="color-slider">Canal AFU</span>
                            <h3 className="post-title"><Link href="./section2posts/Post4" rel="bookmark" onClick={handleClick4}>Spécial ASCO 2023</Link></h3>

                            <div className="post-date">
                                <FiClock className="icon-date" />
                                <p className="date">  10  Mai  2023</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mycontainer">
                    <div className="mynews">
                        <div className="myimage-news">
                                
                                    <Image
                                        src={"/images/image4.png"}
                                        alt="image1"
                                        width={400}
                                        height={220}
                                        className="image-conainer-post"
                                    />
                                
                        </div>
                        <div className="mytxt-news">
                            <span className="color-slider">Les mercredis de la pratique</span>
                            <h3 className="post-title"><Link href="./section2posts/post1" rel="bookmark" onClick={handleClick1} >L’Invalidité : Qu’est-ce que c’est ?  ...</Link></h3>
                            <div className="post-date">
                                <FiClock className="icon-date" />
                                <p className="date">  23  Mai  2023</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mycontainer">
                    <div className="mynews">
                        <div className="myimage-news">

                            
                                <Image
                                    src={"/images/image6.png"}
                                    alt="image1"
                                    width={400}
                                    height={220}
                                    className="image-conainer-post"
                                />
                            
                        </div>
                        <div className="mytxt-news">
                            <span className="color-slider">Canal AFU</span>
                            <h3 className="post-title"><Link href="https://www.frequencemedicale.com/generaliste/jdp/2544-Les-troubles-de-la-personnalite-explorer-de-nouvelles-approches">L’Invalidité : Qu’est-ce que c’est ?  ...</Link></h3>
                            <div className="post-date">
                                <FiClock  className="icon-date"/>
                                <p className="date">  10  Mai  2023</p>
                            </div>
                        </div>
                    </div>

                </div>



            </section >

        </>
    )
}








