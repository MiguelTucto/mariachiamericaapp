"use client";

import { useSession } from "next-auth/react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import mariachi from "@/public/mariachiamericagroup.jpg";
import logo from "@/public/logov1-bgremoved.png";
import Feature from "@/components/Feature";
import SocialNetwork from "@/components/SocialNetwork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Form from "@/components/Form";


const Home = () => {
    const { data: session } = useSession();

    return (
        <>
            <section className={'min-h-screen'} id={'hero'}>
                <Hero />
            </section>
            <section className={'min-h-screen bg-white'} id={'about'}>
                <About />
            </section>
            <section className={'min-h-screen bg-blue-50'} id={'feature'}>
                <Feature />
            </section>
            <section className={'min-h-screen bg-white'} id={'socialnetwork'}>
                <SocialNetwork />
            </section>
            <section className={'h-[500px] bg-blue-50'} id={'contact'}>
                <Contact />
            </section>
            <section className={'min-h-screen bg-white'} id={'form'}>
                <Form />
            </section>
            <section className={'h-[300px] bg-gradient-to-l from-blue-700 to-blue-500'} id={'footer'}>
                <Footer />
            </section>
        </>
    )
}

export default Home;