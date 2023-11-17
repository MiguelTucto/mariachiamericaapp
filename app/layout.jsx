import Provider from "@/components/Provider";
import "styles/globals.css";
import Head from "next/head";
export const metadata = {
    title: "Mariachi America",
    metadataBase: new URL('http://localhost:3000'),
    description: "Mariachi America Ayacucho",
    keywords: "Mariachi America Ayacucho, Mariachi America, Mariachi, Mariachi Ayacucho, Mariachi en Ayacucho, Mariachi en Huamanga, Mariachi en Huanta, Mariachi en Cangallo, Mariachi en La Mar, Mariachi en Lucanas, Mariachi en Parinacochas, Mariachi en Páucar del Sara Sara, Mariachi en Sucre, Mariachi en Ayacucho",
    icons: {
        icon: [
            '/mariachiamerica.ico?v=4',
        ],
        apple: [
            '/mariachiamerica.ico?v=4',
        ],
        shortcut: [
            '/mariachiamerica.ico?v=4',
        ],
    },
    authors: [
        {
            name: "Eulogio Tito",
            email: "",
            twitter: "@eulogioTE",
            github: "eulogioTE",
            linkedin: "eulogioTE",
            facebook: "eulogioTE",
            instagram: "eulogioTE",
            youtube: "eulogioTE",
            twitch: "eulogioTE",
            discord: "eulogioTE",
            telegram: "eulogioTE",
            tiktok: "eulogioTE",
            snapchat: "eulogioTE",
            pinterest: "eulogioTE",
            soundcloud: "eulogioTE",
            steam: "eulogioTE",
            reddit: "eulogioTE",
            whatsapp: "eulogioTE",
            medium: "eulogioTE",
            tumblr: "eulogioTE",
            vimeo: "eulogioTE",
            quora: "eulogioTE",
            spotify: "eulogioTE",
            stackoverflow: "eulogioTE",

        }
    ],
    themeColor: "#3b82f6",
    siteUrl: "https://mariachiamericaayacucho.com",
    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://mariachiamericaayacucho.com",
        title: "Mariachi America Ayacucho",
        description: "Mariachi America Ayacucho",
        image: "/public/mariachiamerica.ico",
        site_name: "Mariachi America Ayacucho",

    },
    twitter: {
        card: "summary_large_image",
        title: "Mariachi America Ayacucho",
        description: "Mariachi America Ayacucho",
        url: "https://google.com",
        image: "/public/mariachiamerica.ico",
        handle: "@eulogioTE",
        site: "@eulogioTE",
        cardType: "summary_large_image",
    },
    facebook: {
        card: "summary_large_image",
        title: "Mariachi America Ayacucho",
        url: "https://google.com",
        description: "Mariachi America Ayacucho",
        image: "/public/mariachiamerica.ico",
        handle: "@eulogioTE",
        site: "@eulogioTE",
        cardType: "summary_large_image",
        appId: "eulogioTE",
    }
}

const RootLayout = ({ children }) => {
    return (
        <html lang={'en'} >
            <body>
                <Provider>
                    <main>
                        { children }
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;