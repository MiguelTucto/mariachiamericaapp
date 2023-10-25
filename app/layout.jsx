import Provider from "@/components/Provider";
import "styles/globals.css";
export const metadata = {
    title: "Mariachi America",
    description: "Mariachi America Ayacucho",
    keywords: "Mariachi America Ayacucho, Mariachi America, Mariachi, Mariachi Ayacucho, Mariachi en Ayacucho, Mariachi en Huamanga, Mariachi en Huanta, Mariachi en Cangallo, Mariachi en La Mar, Mariachi en Lucanas, Mariachi en Parinacochas, Mariachi en Páucar del Sara Sara, Mariachi en Sucre, Mariachi en Ayacucho",

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