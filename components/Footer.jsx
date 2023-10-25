import Image from "next/image";
import logo from "@/public/logov1-bgremoved.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <div className={'md:px-80 px-10 md:py-0 py-5  h-full flex md:flex-row flex-col justify-between items-center'}>

                    <Image src={logo} alt={'Logo Mariachi'} className={'w-[300px] h-[80px]  md:w-[450px] md:h-[130px]'} />
                    <div className={'flex '}>
                        <p className={'text-white'}>© 2021 Mariachi America. All rights reserved.</p>

                    </div>
                    <div className={'flex flex-row gap-10 md:px-0 '}>
                        <FontAwesomeIcon icon={faFacebook}  className={'text-6xl text-yellow-200'}  />
                        <FontAwesomeIcon icon={faYoutube}   className={'text-6xl text-yellow-200'} />
                        <FontAwesomeIcon icon={faWhatsapp}  className={'text-6xl text-yellow-200'} />
                        <FontAwesomeIcon icon={faInstagram} className={'text-6xl text-yellow-200'} />
                    </div>


            </div>
        </>
    )
}

export default Footer;