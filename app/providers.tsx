"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

const domain = process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL
const id = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID

export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter();


    return (
        <Auth0Provider
            domain={domain}
            clientId={id}
            redirectUri={typeof window !== 'undefined' && window.location.origin}
            onRedirectCallback={(appState) =>
                router.replace(appState && appState.returnTo ? appState.returnTo : window.location.pathname)
            }
        >
            <NextUIProvider navigate={router.push}>
                <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
            </NextUIProvider>
        </Auth0Provider>
    );
}
