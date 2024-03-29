import {faWhatsapp, faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileSignature, faPhone, faPhoneSquare, faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

const TakeService = () => {
    const text = useRef(null);

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
            <div ref={text} className={'md:px-80 md:pt-[20px] px-10 pt-5 pb-12 min-h-screen  flex flex-col md:gap-10 gap-0'}>
                <div>
                    <motion.h2 initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'font-bold md:text-8xl text-5xl text-[#F5B83B] '}>¿Como contratar Mariachi America Ayacucho?</motion.h2>
                    <motion.p initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'text-justify text-lg font-thin pt-10 text-[#1F447F]'}>En Mariachi America Ayacucho, nos enorgullece ofrecer múltiples opciones de contratación para garantizar que tu experiencia sea lo más sencilla y profesional posible. Nuestra extensa experiencia y profesionalismo nos permiten adaptarnos a tus necesidades y preferencias, sin importar la naturaleza de tu evento. Ya sea una boda, un cumpleaños, una fiesta corporativa o cualquier otra celebración, estamos listos para hacer que sea memorable.
                        Contáctanos de la manera que mejor se adapte a tu estilo y horarios, y descubre por qué Mariachi America Ayacucho es la elección preferida para quienes buscan la auténtica esencia del mariachi. ¡Te esperamos con los brazos abiertos para ser parte de tu ocasión especial!</motion.p>
                </div>
                <div className={'flex md:flex-row flex-col  justify-between h-[400px] md:px-20 px-5 text-[#1F447F] items-center'}>
                    <div className={'group/whatsapp  ease-in duration-300 hover:scale-150   h-full flex flex-col justify-center md:p-10 p-3 text-center'}>
                        {/*<p className={'w-52 text-justify'}>Escríbenos por Whatsapp para obtener una conversación más fluida y así concretar sin ningún problema. </p>*/}
                        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants}>
                            <Link href={'https://wa.me/51918514737'}>
                                <Tooltip
                                    placement={'top'}
                                    content={
                                        <div className={'flex flex-col items-center mb-10'}>
                                            <p className={' font-black [#1F447F]'}>Whatsapp</p>
                                        </div>
                                    }
                                >
                                    <FontAwesomeIcon  icon={faWhatsappSquare}  className={'md:text-9xl text-7xl group-hover/whatsapp:text-[#25D366]'} />
                                </Tooltip>
                            </Link>
                        </motion.div>
                    </div>
                    <div  className={'group/phone  ease-in duration-300 hover:scale-150  h-full flex flex-col justify-center md:p-10 p-3 text-center'}>
                        {/*<p className={'w-52 text-justify'}>Llámanos con toda confianza. </p>*/}
                        {/*
                        <ul>
                            <li>
                                <a href={'tel:+51918514737'} className={'group-hover/phone:text-[#F5B83B] text-[#1F447F] text-3xl'}>+51 918 514 737</a>
                            </li>
                            <li>
                                <a href={'tel:+51966608527'} className={'group-hover/phone:text-[#F5B83B] text-[#1F447F] text-3xl'}>+51 966 608 527</a>
                            </li>
                        </ul>
                        */}
                        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants}>
                            <Link href={'tel:+51918514737'}>
                                <Tooltip
                                    placement={'top'}
                                    content={
                                        <div className={'flex flex-col items-center mb-10'}>
                                            <p className={' font-black [#1F447F]'}>Celular</p>
                                        </div>
                                    }
                                >
                                    <FontAwesomeIcon  icon={faPhoneSquare}  className={'group-hover/phone:text-blue-500 md:text-9xl text-7xl '} />
                                </Tooltip>
                            </Link>
                        </motion.div>
                    </div>
                    <div  className={'group/form ease-in duration-300 hover:scale-150  h-full flex flex-col justify-center md:p-10 p-3 text-center'}>
                        {/*<p className={'w-52 text-justify'}>Completa nuestra formulario con los datos correspondientes y nosotros nos contactaremos a la brevedad posible. </p>*/}
                        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants}>
                            <Link href={'#form'}>
                                <Tooltip
                                    placement={'top'}
                                    content={
                                        <div className={'flex flex-col items-center mb-10'}>
                                            <p className={' font-black [#1F447F]'}>Complete el formulario</p>
                                        </div>
                                    }
                                >
                                    <FontAwesomeIcon icon={faFileSignature} className={'group-hover/form:text-[#F5B83B] md:text-9xl text-7xl md:ml-0 ml-7'} />
                                </Tooltip>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeService;