import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FiCircle } from 'react-icons/fi';
export default function DecryptageClinique(){
    return(
        <>
        <div className="decryptage-clinique">
                <div className="decryptage">
                    <div className="title-fm">
                        <span className="title">décryptage</span>
                    </div>
                    <div className="decryptage-posts-container">

                        <div className="decryptage-posts">

                            <div className="">
                                <Image
                                    src={"/images/decryptage1.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">HTA de la personne âgée : faut il le contrôler</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="decryptage-posts">
                            <div className="">
                                <Image
                                    src={"/images/decryptage2.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">traitement adjuvant du cancer du sein hormonosensible</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="decryptage-posts">

                            <div className="">
                                <Image
                                    src={"/images/decryptage3.png"}
                                    alt="image1"
                                    width={180}
                                    height={120}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">Cancer du sein RH+/HER2-: intéret d' un inhibiteur de...</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="decryptage-posts">
                            <div className="">
                                <Image
                                    src={"/images/decryptage4.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">Cancer du sein RH+/HER2-: intéret d' un inhibiteur de...</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clinique">
                    <div className="title-fm">
                        <span className="title">clinique</span>
                    </div>
                    <div className="clinique-posts-container">

                        <div className="decryptage-posts">

                            <div className="">
                                <Image
                                    src={"/images/clinique1.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-decryptage"><Link href="">Patient isuffisant cardiaque stable: Risque de ...</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">
                            <div className="">
                                <Image
                                    src={"/images/clinique2.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">Une urticaire qui résiste au traitement antihistaminique</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">
                            <div className="">
                                <Image
                                    src={"/images/clinique3.png"}
                                    alt="image1"
                                    width={180}
                                    height={120}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">1 ére poussée d'insuffisance cardiaque chez un homme de ...</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="clinique-posts">
                            <div className="">
                                <Image
                                    src={"/images/clinique4.png"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-clinique-element">
                                    <h3 className="title-clinique"><Link href="">Un homme de 65 ans fumeur qui n' a pas fait son 3éme...</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}