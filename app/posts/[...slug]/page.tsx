import {Metadata} from "next";
import {notFound} from "next/navigation";
import {getAllPosts, getPostBySlug} from "@/components/markdown";
import {format} from 'date-fns';
import React from "react";
import Image from "next/image";
import {Image as NextUIImage} from "@nextui-org/react"
import markdownStyles from "./markdown-styles.module.css";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import rehypeStringify from "rehype-stringify";

export default async function Post({params}: Params) {
    const post = getPostBySlug(params.slug);


    if (!post) {
        return notFound();
    }


    return (

        <div className="p-10">
            <div className={"flex justify-center items-center text-center w-full my-10"}>
                <div className={"space-y-5"}>
                    <h1 className={"text-[2.9rem] md:text-7xl font-bold dark:text-white secondary p-2"}>{post.title}</h1>
                    <div className="flex flex-row items-center justify-center text-center gap-2">
                        <Image
                            alt="blogAuthor"
                            src={post.author.picture}
                            className="rounded-full"
                            width={40}
                            height={40}
                            style={{width: "40px", height: "40px", objectFit: "cover"}}
                        />

                        <h1 className="main">{post.author.name}</h1>
                        <div className="hidden lg:flex border-l dark:border-gray-300 border-gray-900 h-6 mx-2"/>
                        <h1 className="secondary">{new Date(post.date).toLocaleDateString()}</h1>
                    </div>
                    <NextUIImage
                        src={post.coverImage}
                        alt={"blogImage"}
                        style={{width: '100%', height: 'auto', maxWidth: '1500px', maxHeight: '600px'}}
                    />
                </div>
            </div>
            <div className="prose max-w-none dark:prose-invert">
                <ReactMarkdown className={markdownStyles["markdown"]}
                               remarkPlugins={[remarkGfm, remarkParse, remarkStringify, remarkRehype]}
                               rehypePlugins={[rehypeRaw, rehypeFormat, rehypeMinifyWhitespace, rehypeStringify]}>{post.content}</ReactMarkdown>
            </div>
        </div>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export function generateMetadata({params}: Params): Metadata {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const title = `${post.title}`;

    return {
        openGraph: {
            title,
            images: [post.ogImage.url],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        params: {
            slug: post.slug,
        }
    }));
}