
import Image from "next/image";
import Link from "next/link";
import { ImageResponse } from "next/server";
import ConnectBtn from "./ConnectBtn";
import MenuIcon from "./MenuIcon";
import { TiUser, TiLink } from "react-icons/ti";

export default function Header() {

    return (
        <>

            <nav className="header-content  top-0 left-0 w-full  text-blue-600  px-4 py-5 shadow-md">
                <div className="relative freq-medical-logo">
                    <Link href="/">

                        <Image
                            src={"/images/logo-fm-final.png"}
                            alt="Logo"
                            width={120}
                            height={30}
                            className="h-8 w-auto"
                        />

                    </Link>
                </div>
                <div className="container mx-auto flex justify-between">

                    <div className="connection">
                        <ConnectBtn />





                    </div>
                    <div className="relative freq-med-logo-header">
                        <Link href="/">

                            <Image
                                src={"/images/logo-fm-final.png"}
                                alt="Logo"
                                width={120}
                                height={30}
                                className="h-8 w-auto"
                            />

                        </Link>
                    </div>



                    <MenuIcon />

                </div>
            </nav>

        </>
    )
}



