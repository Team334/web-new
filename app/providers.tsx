"use client";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {useRouter} from 'next/navigation';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {Auth0Provider} from '@auth0/auth0-react';
import {ThemeProviderProps} from "next-themes/dist/types";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({children, themeProps}: ProvidersProps) {
    const redirect_uri = typeof window !== 'undefined' ? window.location.origin : '';
    const router = useRouter();
    const domain = process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ?? '';
    const id = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? '';


    return (
        <NextUIProvider navigate={router.push}>
            <Auth0Provider
                domain={domain}
                clientId={id}
                authorizationParams={{
                    redirect_uri: redirect_uri
                }}
            >
                <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
            </Auth0Provider>
        </NextUIProvider>
    );
}
