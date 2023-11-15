import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {facebook} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faFacebookF, faInstagram, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialNetwork = () => {
    const cardVariants = {
        offscreen: {
            y: 300,

        },
        onscreen: {
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.6,

            }
        }
    };

    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <div className={'md:bg-gradient-to-b md:from-blue-50  md:w-7/12 w-full md:px-0 px-5 h-32 -mt-16 flex  justify-between items-center'}>
                    <Link href={'https://www.facebook.com/MariachiAmericaAyacucho'} className={'relative'}>
                        <FontAwesomeIcon beat={true} icon={faFacebook}  className={'md:text-8xl text-5xl text-[#3b5998]'}  />
                    </Link>
                    <Link href={'https://www.youtube.com/@eulogioTE'}>
                        <FontAwesomeIcon beat={true} icon={faYoutube}   className={'md:text-8xl text-5xl text-[#c4302b]'} />
                    </Link>
                    <Link href={'https://wa.me/51918514737'}>
                        <FontAwesomeIcon beat={true} icon={faWhatsapp}  className={'md:text-8xl text-5xl text-[#25D366]'} />
                    </Link>
                    <Link href={'https://www.instagram.com/mariachiamericaayacucho/'}>
                        <FontAwesomeIcon beat={true} icon={faInstagram} className={'md:text-8xl text-5xl text-[#E1306C]'} />
                    </Link>
                </div>
                <div className={'flex flex-col items-center'}>
                    <motion.h2 initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'font-bold md:text-8xl text-5xl md:mt-20 mt-0 md:pl-0 pl-10 text-[#F5B83B]'}>Nuestros Videoclips</motion.h2>
                    <div  className={'flex md:flex-row flex-col  gap-5 md:mt-36 mt-10 '}>
                        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants}>
                            <iframe className={'md:w-[500px] md:h-[315px] w-[300px] h-[200px] rounded-2xl'}  src="https://www.youtube.com/embed/FrIb0RUE3cg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants}>
                            <iframe className={'md:w-[500px] md:h-[315px] w-[300px] h-[200px] rounded-2xl'} src="https://www.youtube.com/embed/9_jvXvoDoho" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialNetwork;