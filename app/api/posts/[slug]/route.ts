import {NextRequest, NextResponse} from "next/server";
import {getPostBySlug, getAllPosts} from "../markdown";


export async function GET(request: NextRequest, {params}: { params: { slug: string } }) {
    const slug = params.slug;
    const post = getPostBySlug(slug);
    return NextResponse.json(post);
}


export async function generateStaticParams() {
  const slugs = await getAllPosts();
  return slugs.map((slug) => ({ slug }));
}
