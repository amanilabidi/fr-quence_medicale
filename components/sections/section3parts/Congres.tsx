
import Image from "next/image"
import Link from "next/link"
export default function Congres() {
    return (
        <>
            <div className="congres">
                <div className="title-fm">
                    <span className="title">congrès</span>
                </div>
                <div className="congres-post">
                    <div className="left-congres">
                        <div className="left-part1">
                            <div className="small-title-congres">
                                <h3 className="title-congres"><Link href="">asco 2023</Link></h3>
                            </div>
                            <div className="congres-articles">

                                <div className="congres-article">
                                    <Image
                                        src={"/images/congres1.png"}
                                        alt="image1"
                                        width={220}
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
                                        width={220}
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
                                        width={220}
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
                                        width={220}
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
                                        width={220}
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
                                        width={220}
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
                    <div className="right-congres">
                        <div className="small-title-congres">
                            <h3 className="title-congres"><Link href="">les derniers congrès</Link></h3>
                        </div>
                        <div className="right-articles-congres">
                            <div className="right-article-congre">
                                <Link href="">
                                    <Image
                                        src={"/images/rightcongres1.jpeg"}
                                        alt="image1"
                                        width={200}
                                        height={200}
                                        className="congres-exemple"
                                    />
                                </Link>
                            </div>
                            <div className="right-article-congre">
                                <Link href="">
                                    <Image
                                        src={"/images/rightcongres2.png"}
                                        alt="image1"
                                        width={200}
                                        height={200}
                                        className="congres-exemple"
                                    />
                                </Link>
                            </div>
                            <div className="right-article-congre">
                                <Link href="">
                                    <Image
                                        src={"/images/rightcongres3.png"}
                                        alt="image1"
                                        width={200}
                                        height={200}
                                        className="congres-exemple"
                                    />
                                </Link>
                            </div>
                            <div className="right-article-congre">
                                <Link href="">
                                    <Image
                                        src={"/images/rightcongres4.png"}
                                        alt="image1"
                                        width={200}
                                        height={200}
                                        className="congres-exemple"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}