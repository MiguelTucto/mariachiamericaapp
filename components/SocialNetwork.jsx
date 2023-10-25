import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {facebook} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faFacebookF, faInstagram, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";

const SocialNetwork = () => {
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <div className={'md:bg-gradient-to-b md:from-blue-50  md:w-7/12 w-full md:px-0 px-5 h-32 -mt-16 flex  justify-between items-center'}>
                    <FontAwesomeIcon icon={faFacebook}  className={'md:text-8xl text-5xl text-[#3b5998]'}  />
                    <FontAwesomeIcon icon={faYoutube}   className={'md:text-8xl text-5xl text-[#c4302b]'} />
                    <FontAwesomeIcon icon={faWhatsapp}  className={'md:text-8xl text-5xl text-[#25D366]'} />
                    <FontAwesomeIcon icon={faInstagram} className={'md:text-8xl text-5xl text-[#E1306C]'} />
                </div>
                <div className={'flex flex-col items-center'}>
                    <h2 className={'font-bold md:text-8xl text-5xl md:mt-20 mt-0 md:pl-0 pl-10'}>Nuestros Videoclips</h2>
                    <div className={'flex md:flex-row flex-col  gap-5 md:mt-36 mt-10 '}>
                        <iframe className={'md:w-[500px] md:h-[315px] w-[300px] h-[200px]'}  src="https://www.youtube.com/embed/FrIb0RUE3cg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe className={'md:w-[500px] md:h-[315px] w-[300px] h-[200px]'} src="https://www.youtube.com/embed/9_jvXvoDoho" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialNetwork;