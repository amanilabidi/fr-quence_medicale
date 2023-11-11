import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Section3container(){

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
    return(
        <>
        <div className="section3-container">
                <div className="left">
                    <div className="title-fm">
                        <span className="title">Actualités</span>
                    </div>
                    <div className="Actualites-posts">
                        <div className="post">
                            <Image
                                src={"/images/act1.jpg"}
                                alt="image1"
                                width={200}
                                height={300}
                                className="act-img"
                            />
                            <h2 className="act-link"><Link href="">Lombalgie et cervicalgie aiguë : pas de bénéfice des antalgiques  ...</Link></h2>
                            <p className="act-description">Les antalgiques opioïdes n’apportent pas de bénéfice évident sur la douleur lombaire ou cervicale
                                aiguë ou subaiguë tout en faisant courir un risque de mésusage.
                                Leur prescription devrait être discutée très soigneusement dans ces indications</p>
                        </div>
                        <div className="post">
                            <Image
                                src={"/images/act2.jpg"}
                                alt="image1"
                                width={200}
                                height={300}
                                className="act-img"
                            />
                            <h2 className="act-link"><Link href="">Glioblastome : une nouvelle avancée dans le traitement du  ...</Link></h2>
                            <p className="act-description">Combiner un virus oncolytique à une immunothérapie pourrait
                                faire régresser la tumeur et améliorer les chances de survie chez certains patients.</p>
                        </div>


                    </div>
                </div>
                <div className="right">
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
                </div>
            </div>
        </>
    )
}