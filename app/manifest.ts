import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Techknights',
        short_name: 'Team 334',
        description: 'The 334th Team in FIRST Robotics Competition',
        start_url: '/',
        lang: "en",
        orientation: "any",
        display: 'standalone',
        background_color: '#000',
        theme_color: '#000',
        icons: [
            {
                src: '/logo.png',
                sizes: 'any',
                type: 'image/x-icon',
                purpose: "any"
            },
        ],

    }
}