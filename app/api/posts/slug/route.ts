import {NextRequest, NextResponse} from "next/server";
import {getAllPosts, getPostBySlug} from "../markdown";


export async function GET(request: NextRequest ) {
    const {searchParams} = new URL(request.url)
    const slug: any = searchParams.get('slug');
    const post = getPostBySlug(slug);
    return NextResponse.json(post);
}