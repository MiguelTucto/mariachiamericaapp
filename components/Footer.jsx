import Image from "next/image";
import logo from "@/public/logov1-bgremoved.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={'md:px-80 px-10 md:py-0 py-5  h-full flex md:flex-row flex-col justify-between items-center'}>
                    <Link href={'#'}>
                        <Image src={logo} alt={'Logo Mariachi'} className={'w-[300px] h-[80px]  md:w-[450px] md:h-[130px]'} />

                    </Link>
                    <div className={'flex '}>
                        <p className={'text-white'}>© 2021 Mariachi America. All rights reserved.</p>

                    </div>
                    <div className={'flex flex-row gap-10 md:px-0 '}>
                        <Link href={'https://www.facebook.com/MariachiAmericaAyacucho'}>
                            <FontAwesomeIcon icon={faFacebook}  className={'text-6xl text-yellow-200'}  />
                        </Link>
                        <Link href={'https://www.youtube.com/@eulogioTE'}>
                            <FontAwesomeIcon icon={faYoutube}   className={'text-6xl text-yellow-200'} />
                        </Link>
                        <Link href={'https://wa.me/51918514737'}>
                            <FontAwesomeIcon icon={faWhatsapp}  className={'text-6xl text-yellow-200'} />
                        </Link>
                        <Link href={'https://www.instagram.com/mariachiamericaayacucho/'}>
                            <FontAwesomeIcon icon={faInstagram} className={'text-6xl text-yellow-200'} />
                        </Link>
                    </div>


            </div>
        </>
    )
}

export default Footer;