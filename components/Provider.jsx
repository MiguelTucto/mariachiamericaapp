"use client";

import { SessionProvider } from "next-auth/react";
import {NextUIProvider} from "@nextui-org/react";

const Provider = ({ children, session }) => {
    return(
        <NextUIProvider>
            <SessionProvider session={session}>
                { children }
            </SessionProvider>
        </NextUIProvider>

    )
}

export default Provider;