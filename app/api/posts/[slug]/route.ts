import {NextRequest, NextResponse} from "next/server";
import {getAllPosts, getPostBySlug} from "../markdown";


export async function GET(request: NextRequest, {params}: { params: { slug: string } }) {
    const slug = params.slug;
    const post = getPostBySlug(slug);
    return NextResponse.json(post);
}

export async function generateStaticParams() {
    const posts = getAllPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}