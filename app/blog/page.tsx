import {title} from "@/components/primitives";
import Container from "../_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { getAllPosts } from "@/components/markdown/api";

export default function BlogPage() {
    const allPosts = getAllPosts();
    const heroPost = allPosts[0];


    return (
        <div>
            <Container>
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />
            </Container>
        </div>
    );
}
