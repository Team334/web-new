import {Metadata} from "next";
import {notFound} from "next/navigation";
import {getAllPosts, getPostBySlug} from "@/components/markdown";
import {format} from 'date-fns';
import React from "react";
import {Image} from "@nextui-org/react";
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

    console.log(post.content)


    return (

        <div className="p-10">
            <div className="relative h-72 w-full rounded-[1.5rem] overflow-hidden mb-10">
                <Image
                    alt={"blogImage"}
                    src={post.coverImage}
                    className={"object-fill"}
                />
            </div>
            <div
                className="relative w-full h-full flex bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900 px-16 py-10">
                <div className="self-end">
                    <h1 className="text-5xl">{post.title}</h1>
                    <h4 className="font-normal">by {post.author.name} — {format(new Date(post.date), 'MMMM dd, yyyy')}</h4>
                </div>
            </div>
            <div className="prose max-w-none dark:prose-invert">
                <ReactMarkdown className={markdownStyles["markdown"]} remarkPlugins={[remarkGfm, remarkParse, remarkStringify, remarkRehype]} rehypePlugins={[rehypeRaw, rehypeFormat, rehypeMinifyWhitespace, rehypeStringify]}>{post.content}</ReactMarkdown>
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