import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/components/markdown/api";
import markdownToHtml from "@/components/markdown/markdownToHTML";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

console.log("Hello World")

export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug);

    console.log(post)

    if (!post) {
        return notFound();
    }


    const content = await markdownToHtml(post.content || "");

    return (
        <main>
            <Alert preview={post.preview} />
            <Container>
                <Header />
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                    />
                    <PostBody content={content} />
                </article>
            </Container>
        </main>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Params): Metadata {
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
        slug: post.slug,
    }));
}