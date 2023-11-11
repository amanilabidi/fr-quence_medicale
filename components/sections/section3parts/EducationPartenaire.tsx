import Image from "next/image"
import Link from "next/link"
export default function EducationPartenaire() {
    return (
        <>
            <div className="education-partenaires">
                <div className="education">
                    <div className="title-fm">
                        <span className="title">education patients</span>
                    </div>
                    <div className="education-posts-container">

                        <div className="education-posts">

                            <div className="">
                                <Image
                                    src={"/images/education1.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">Les principaux bienfaits du curcuma pour la santé</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="decryptage-posts">
                            <div className="">
                                <Image
                                    src={"/images/education2.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">Pourquoi reprend-on souvent du poids après un régime?</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="decryptage-posts">

                            <div className="">
                                <Image
                                    src={"/images/education3.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={120}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">Pourquoi quatres jeunes femmes sur dix manquent de fer</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="decryptage-posts">
                            <div className="">
                                <Image
                                    src={"/images/education4.jpg"}
                                    alt="image1"
                                    width={180}
                                    height={150}
                                    className=""
                                />
                                <div className="title-decryptage-element">
                                    <h3 className="title-decryptage"><Link href="">Maladie de Parkinson: les hallucinations sont un signe...</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partenaires">
                    <div className="title-fm">
                        <span className="title">partenaires</span>
                    </div>
                    <div className="nos-partenaires">
                        <div className="one-partenaire">
                            <Image
                                src={"/images/partenaire1.png"}
                                alt="image1"
                                width={150}
                                height={120}
                                className="image"
                            />
                            <div className="overlay">
                                <div className="text">les mardis de la trombose</div>
                            </div>

                        </div>
                        <div className="one-partenaire">
                            <Image
                                src={"/images/partenaire2.jpg"}
                                alt="image1"
                                width={180}
                                height={120}
                                className="image"
                            />
                            <div className="overlay">
                                <div className="text">LEEM</div>
                            </div>

                        </div>
                        <div className="one-partenaire">
                            <Image
                                src={"/images/partenaire3.jpg"}
                                alt="image1"
                                width={180}
                                height={120}
                                className="image"
                            />
                            <div className="overlay">
                                <div className="text">assurance maladie</div>
                            </div>

                        </div>
                        <div className="one-partenaire">
                            <Image
                                src={"/images/partenaire4.jpg"}
                                alt="image1"
                                width={180}
                                height={120}
                                className="image"
                            />
                            <div className="overlay">
                                <div className="text">INCA</div>
                            </div>

                        </div>
                        <div className="one-partenaire">
                            <Image
                                src={"/images/partenaire5.jpg"}
                                alt="image1"
                                width={180}
                                height={120}
                                className="image"
                            />
                            <div className="overlay">
                                <div className="text">Santé 2030</div>
                            </div>

                        </div>
                        <div className="one-partenaire">
                            <Image
                                src={"/images/partenaire6.jpg"}
                                alt="image1"
                                width={180}
                                height={120}
                                className="image"
                            />
                            <div className="overlay">
                                <div className="text">Canal AFU</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}