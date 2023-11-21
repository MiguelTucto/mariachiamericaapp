import Image from "next/image";
import mariachi from "@/public/mariachiamericagroup.webp";
import { motion, Variants } from "framer-motion";
import {useRef} from "react";

const PhoneContact = () => {
    const text = useRef(null);

    const cardVariants = {
        offscreen: {
            x: 20,
            opacity: 0,

        },
        onscreen: {
            x: 0,
            opacity: 1,
            velocity: 1.5,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5,
            }
        }
    };

    const cardVariantTwo = {
        offscreen: {
            x: -50,
            opacity: 0,

        },
        onscreen: {
            x: 0,
            opacity: 1,
            velocity: 1.5,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5,
            }
        },

    }

    return (
        <>

            <Image
                src={mariachi}
                alt={'Mariachi America Group'}
                quality={100}
                style={{
                    filter: 'brightness(0.5)',
                    position: 'fixed',
                    zIndex: '-2',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',

                }}
                ref={text}
            />
            <div className={'md:px-80 md:py-[50px] px-10 py-5'}>
                <h2 className={'text-[#F5B83B] font-bold md:text-8xl text-5xl sticky'}>Contrata a los mejores mariachis de Ayacucho</h2>
                <ul className={'flex flex-row sticky mt-20 w-full justify-between md:px-52 px-0'}>
                    <motion.li initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariantTwo} className={'py-2 px-2  border border-transparent shadow-sm text-sm rounded-md bg-[#F5B83B] hover:text-white font-black text-[#1F447F] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}>
                        <a href={'tel:+51918514737'} className={'hover:text-[#F5B83B] text-[#1F447F] md:text-3xl text-lg'}>+51 918 514 737</a>
                    </motion.li>
                    <motion.li initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'py-2 px-2  border border-transparent shadow-sm text-sm rounded-md bg-[#F5B83B] hover:text-white font-black text-[#1F447F] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}>
                        <a href={'tel:+51966608527'} className={'hover:text-[#F5B83B] text-[#1F447F] md:text-3xl text-lg'}>+51 966 608 527</a>
                    </motion.li>
                </ul>
            </div>
        </>
    )
}

export default PhoneContact;