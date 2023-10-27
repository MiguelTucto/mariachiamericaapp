import { motion } from 'framer-motion';

const Contact = () => {
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
            <div className={'h-full md:pt-0 pt-5  flex md:flex-row flex-col md:justify-center justify-between'}>
                <div className={'md:pl-80 pl-10 flex flex-col justify-center'}>
                    <motion.h2 initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'font-bold md:text-8xl text-5xl'}>Ubícanos</motion.h2>
                    <motion.p initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'font-sans pt-3'}>Si deseas ubicarnos y poder conocer más a detalle nuestros servicios, te ofrecemos a que nos visites en nuestro local</motion.p>
                </div>
                <div className={'pt-5'}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.7544907649707!2d-74.22766078931178!3d-13.15468632081334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127df04bce72b5%3A0xf0a9c97c8dafb93f!2sMariachi%20Am%C3%A9rica%20Ayacucho!5e0!3m2!1ses-419!2spe!4v1684173743187!5m2!1ses-419!2spe" className="object-cover md:h-full h-[450px] md:w-[1000px] w-full"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact;