import Image from "next/image";
import Photo from '../public/featuremariachiphoto.jpg'
import Link from "next/link";

const Feature = () => {
    return (
        <>
            <div className={'md:px-80 md:pt-[100px] px-10 pt-5 pb-12 '}>
                <h2 className={'font-bold md:text-8xl text-5xl'}>Nos representa como grupo</h2>
                <div className={'flex md:flex-row flex-col items-center justify-between mt-9'}>
                    <div className={'flex flex-col gap-10'}>
                        <div className={'flex flex-row items-center gap-4'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className={'font-bold text-xl'}>Profesionalismo</h3>
                                <h4 className={'font-sans'}>Aqui encontraras buenas servicios</h4>
                            </div>

                        </div>
                        <div className={'flex flex-row items-center gap-4'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                            </svg>
                            <div>
                                <h3 className={'font-bold text-xl'}>Variedad Musical</h3>
                                <h4 className={'font-sans'}>Aqui encontraras buenas servicios</h4>
                            </div>
                        </div>
                        <div className={'flex flex-row items-center gap-4'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            <div>
                                <h3 className={'font-bold text-xl'}>Todos los lugares</h3>
                                <h4 className={'font-sans'}>Aqui encontraras buenas servicios</h4>
                            </div>
                        </div>
                        <Link href={'#form'} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Solicitar Servicios
                        </Link>
                    </div>
                    <Image src={Photo} alt={'Mariachi America'} className={' mt-10 rounded-md '} width={750}   />
                </div>
            </div>
        </>
    )
}

export default Feature;