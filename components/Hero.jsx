import Image from "next/image";
import mariachi from "@/public/mariachiamericagroup.webp";
import logo from "@/public/logov1-bgremoved.webp";
import {useEffect, useState} from "react";
import Link from "next/link";

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 900) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Image
                src={mariachi}
                alt={'Mariachi America Group'}
                priority={true}
                quality={100}
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}

            />
            <nav className={`w-full  flex justify-center fixed  ${scrolled ? 'bg-gradient-to-l from-blue-700 to-blue-500 shadow-2xl ease-in duration-700 justify-between md:px-80 items-center px-5 z-10 ' : ' duration-700'} `} >
                <Link href={'#'}>
                    <Image src={logo} alt={'Logo Mariachi'} className={`w-[250px] h-[70px]  md:w-[450px] md:h-[130px] ${scrolled ? 'md:w-[450px] md:h-[130px]' : ''}`} />
                </Link>
                <div className={`${scrolled ? '  gap-5 md:block hidden ' : 'hidden'}`}>
                    <Link href={'#about'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Nosotros</Link>
                    <Link href={'#takeservice'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Contratar</Link>
                    <Link href={'#feature'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Características</Link>
                    <Link href={'#contact'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Ubícanos</Link>
                    <Link href={'#socialnetwork'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Videoclips</Link>
                    <Link href={'#form'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Cotización</Link>
                </div>
                <i className={`${scrolled ? 'md:hidden visible' : 'hidden'} `} onClick={() => {setIsMenuOpen(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </i>
                {
                    isMenuOpen ? (
                        <div className={`fixed top-0 left-0 w-full h-full bg-blue-500 bg-opacity-90 flex justify-center items-center z-50`}>
                            <div className={`flex flex-col gap-5 text-center`}>
                                <Link href={'#about'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Nosotros</Link>
                                <Link href={'#takeservice'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Contratar</Link>
                                <Link href={'#feature'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Características</Link>
                                <Link href={'#contact'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Ubícanos</Link>
                                <Link href={'#socialnetwork'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Videoclips</Link>
                                <Link href={'#form'} className={`font-satoshi font-bold text-xl text-[#F5B83B] ${scrolled ? 'text-2xl mr-5' : ''}`}>Cotización</Link>
                            </div>
                            <i className={`absolute top-0 right-0 mt-5 mr-5`} onClick={() => {setIsMenuOpen(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-6 h-6 text-yellow-200`}>
                                    <path fillRule="evenodd" d="M10 11.414l4.95 4.95 1.414-1.414L11.414 10l4.95-4.95L14.95 3.636 10 8.586 5.05 3.636 3.636 5.05 8.586 10l-4.95 4.95L5.05 16.364 10 11.414z" clipRule="evenodd" />
                                </svg>
                            </i>
                        </div>
                    ) : null

                }
            </nav>
        </>
    )
}

export default Hero;