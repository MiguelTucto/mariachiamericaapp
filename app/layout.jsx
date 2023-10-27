import Provider from "@/components/Provider";
import "styles/globals.css";
export const metadata = {
    title: "Mariachi America",
    description: "Mariachi America Ayacucho",
    keywords: "Mariachi America Ayacucho, Mariachi America, Mariachi, Mariachi Ayacucho, Mariachi en Ayacucho, Mariachi en Huamanga, Mariachi en Huanta, Mariachi en Cangallo, Mariachi en La Mar, Mariachi en Lucanas, Mariachi en Parinacochas, Mariachi en Páucar del Sara Sara, Mariachi en Sucre, Mariachi en Ayacucho",
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
    icon: "/public/mariachiamerica.ico",
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
        <html>
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