// import React from "react"

type Button = {
    href: string;
    children: React.ReactNode;
    className?: string;
}

type BannerProps = {
    classname?: string;
    title: string;
    subTitle: string;
    button?: {
        buttonText: string;
        buttonLink: string;
    }
}