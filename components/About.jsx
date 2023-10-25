import Photo from '../public/aboutmariachiphoto.jpg'
import Image from "next/image";
const About = () => {
    return (
        <>
            <div className={'md:px-80 md:py-[100px] px-10 py-5 flex flex-col'}>
                <h2 className={'font-bold md:text-8xl text-5xl '}>¿Quienes Somos?</h2>
                <p className={'md:mt-10 mt-5 text-lg leading-tight font-sans text-gray-900'}>
                    Somos un grupo de mariachi con mas de 25 años de experiencia, nos caracterizamos por brindar un servicio de calidad y profesionalismo, contamos con un amplio repertorio musical para todo tipo de eventos, desde serenatas, cumpleaños, bodas, misas, funerales, etc.
                    Nuestro grupo esta conformado por 8 integrantes, 2 trompetas, 2 violines, 1 vihuela, 1 guitarra, 1 guitarron y 1 cantante, todos ellos con una amplia experiencia en el medio.
                </p>
                <Image src={Photo} alt={'Mariachi America About Photo'} className={'md:mt-10 mt-5 rounded-md'} layout={'responsive'} width={100} height={100} />
            </div>
        </>
    )
}

export default About;