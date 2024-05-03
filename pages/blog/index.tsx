import Link from "@next/link";
import Image from 'next/image';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/shadcn/ui/card";
import React from "react";
import {TextGenerateEffect} from "@/components/aceternity/ui/autotype";
import { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
    slug: string;
    frontMatter: { [key: string]: any };
}

interface BlogHomeProps {
    posts: BlogPost[];
}

const BlogHome = ({ posts }) => {


    return (
        <div className="p-5">
            <TextGenerateEffect words={"Blog"}
                                className={"underline font-bold text-center text-5xl md:text-6xl main mb-10"}/>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {posts
                    .sort((a: any, b: any) => new Date(a.date) < new Date(b.date) ? 1 : -1)
                    .map((post: any) => (
                        <Link
                            href={`/posts/${post.slug}`}
                            key={post.slug}
                        >
                            <Card className="w-[330px]">
                                <CardHeader>
                                    <CardTitle className={"text-center main"}>{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className={"flex items-center justify-center"}>
                                        <Image
                                            alt={"blogImage"}
                                            src={`${post.coverImage}`}
                                            className={"justify-self-center rounded-lg"}
                                            width={"330"}
                                            height={"20"}
                                        />
                                    </div>
                                    {/* <hr className="align-middle border-gray-200 my-2 w-full overflow-x-hidden m-auto"/> */}
                                    <p className={"text-gray-500 mt-3"}>{post.excerpt.length > 70 ? post.excerpt.slice(0, 70) + "..." : post.excerpt}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <div className={"flex flex-row items-center text-center gap-2"}>
                                        <Image
                                            alt={"blogAuthor"}
                                            src={post.author.picture}
                                            className="rounded-full"
                                            width={40}
                                            height={40}
                                            style={{width: "40px", height: "40px", objectFit: "cover"}}
                                        />

                                        <h1 className={"secondary"}>{post.author.name}</h1>
                                    </div>
                                    <h1 className={"secondary"}>{new Date(post.date).toLocaleDateString()}</h1>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps<BlogHomeProps> = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
        const { data } = matter(markdownWithMeta);
        return {
            frontMatter: data,
            slug: filename.split('.')[0]
        };
    });

    return {
        props: {
            // Jank way of working around Next.js's inability to serialize Date objects
            posts: JSON.parse(JSON.stringify(posts)),
        }
    };
};

export default BlogHome;