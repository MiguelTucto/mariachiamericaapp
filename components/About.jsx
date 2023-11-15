import Photo from '../public/aboutmariachiphoto.webp'
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Modal from "@/components/Modal";
import {motion, useScroll, useTransform, Variants} from "framer-motion";
import React from "react";
const About = () => {
    const [onClose, setOnClose] = useState(false);const text = useRef(null);

    const cardVariants = {
        offscreen: {
            y: 300,
            opacity: 0,

        },
        onscreen: {
            y: 0,
            opacity: 1,
            velocity: 1.5,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5,
            }
        }
    };


    return (
        <>
            <div className={'md:px-80 md:py-[100px] px-10 py-5 flex flex-col'} ref={text}>
                <motion.h2 initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'font-bold md:text-8xl text-5xl text-[#F5B83B] '}>Mariachi America Ayacucho</motion.h2>
                <motion.p initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'md:mt-10 mt-5 text-[#3B85F5]   font-sans text-justify'}>
                    Somos un grupo de <a className={'text-[#F5B83B]'}>mariachi</a>  con mas de 25 años de experiencia, nos caracterizamos por brindar un servicio de calidad y profesionalismo, contamos con un amplio repertorio musical para todo tipo de eventos, desde serenatas, cumpleaños, bodas, misas, funerales, etc.
                    Nuestro grupo esta conformado por 8 integrantes, 2 trompetas, 2 violines, 1 vihuela, 1 guitarra, 1 guitarron y 1 cantante, todos ellos con una amplia experiencia en el medio.
                </motion.p>
                <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants}>
                    <Image src={Photo} alt={'Mariachi America About Photo'} className={'md:mt-10 mt-5 rounded-md'} layout={'responsive'} width={100} height={100} onClick={() => setOnClose(!onClose)} />
                </motion.div>
                {
                    onClose ? (
                        <>
                            <Modal setOnClose={setOnClose}>
                                <Image src={Photo} alt={'Mariachi America About Photo'} className={'md:mt-10 mt-28 md:px-0 px-5 rounded-md md:w-full md:h-full w-full object-contain  h-[500px] md:pr-20 md:pl-20 md:pb-52'}  />
                            </Modal>
                        </>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>
    )
}

export default About;