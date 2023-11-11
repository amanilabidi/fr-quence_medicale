import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FiCircle } from 'react-icons/fi';
export default function ParcoursSante(){
    return(
        <>
         <div className="parcours-sante">
                <div className="parcours">
                    <div className="title-fm">
                        <span className="title">parcours</span>
                    </div>
                    <div className="clinique-posts-container">

                        <div className="decryptage-posts">

                            <div className="">
                                <Image
                                    src={"/images/parcours1.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-decryptage"><Link href="">Eczéma palpébral: du patient à l'expert, comprendre pour...</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">

                            <div className="">
                                <Image
                                    src={"/images/parcours2.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">Cancers réfractaires de la thyroide:l'apport...</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">

                            <div className="">
                                <Image
                                    src={"/images/parcours3.png"}
                                    alt="image1"
                                    width={180}
                                    height={120}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">Cancer colorectal: thérapies ciblées et complications...</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">
                            <div className="">
                                <Image
                                    src={"/images/parcours4.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">La fibrillation atriale</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sante">
                    <div className="title-fm">
                        <span className="title"> la santé</span>
                    </div>
                    <div className="clinique-posts-container">

                        <div className="decryptage-posts">

                            <div className="">
                                <Image
                                    src={"/images/sante1.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-decryptage"><Link href="">La Cnam et la médecine générale..."Opération traçage!"</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">
                            <div className="">
                                <Image
                                    src={"/images/sante2.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">L'Assistant médicale...pourquoi et comment?</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">

                            <div className="">
                                <Image
                                    src={"/images/sante3.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={120}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">Ou est passé la vaccination de l'adulte?</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">
                            <div className="">
                                <Image
                                    src={"/images/sante4.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">Santé 2030: à quoi ressemblera notre médecine ...</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}