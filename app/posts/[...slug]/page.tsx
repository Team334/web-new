import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/components/markdown/api";
import markdownToHtml from "@/components/markdown/markdownToHTML";
// import Alert from "@/app/_components/alert";
// import Container from "@/app/_components/container";
// import Header from "@/app/_components/header";
// import { PostBody } from "../../_components/post-body";
// import { PostHeader } from "@/app/_components/post-header";
// import coverImage from "@/app/_components/cover-image";
import { format } from 'date-fns';
import React from "react";
import {Image} from "@nextui-org/react";
import markdownStyles from "@/app/_components/markdown-styles.module.css";

console.log("Hello world")

export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug);


    if (!post) {
        return notFound();
    }


    const content = await markdownToHtml(post.content || "");

    return (
        // <main>
        //     <Alert preview={post.preview} />
        //     <Container>
        //         <Header />
        //         <article className="mb-32">
        //             <PostHeader
        //                 title={post.title}
        //                 coverImage={post.coverImage}
        //                 date={post.date}
        //                 author={post.author}
        //             />
        //             <PostBody content={content} />
        //         </article>
        //     </Container>
        // </main>

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
        <article className="prose max-w-none dark:prose-invert">
            <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
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