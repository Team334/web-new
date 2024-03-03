import {getAllPosts} from "@/components/markdown/api";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/react";

export default function BlogPage() {
    const posts = getAllPosts();


    return (
        <div className="">
            <div className="grid grid-cols-2 gap-4">
                {posts
                    .sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
                    .map((post) => (
                        <Link href={`/posts/${post.slug}`} key={post.slug}>
                            <div
                                className="rounded-[1.5rem] overflow-hidden bg-slate-900 cursor-pointer duration-300 ease-out hover:-translate-y-2">
                                <div className="relative h-40 w-full">
                                    {post.coverImage && (
                                        <Image
                                            alt={"blogImage"}
                                            src={`${post.coverImage}`}
                                        />
                                    )}
                                    <div
                                        className="relative w-full h-full flex bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900 px-16 py-10"/>
                                </div>
                                <div className="p-5 pb-7">
                                    <h1>{post.title} <span
                                        className="text-xl font-normal text-slate-400">{new Date(post.date).toLocaleDateString()}</span>
                                    </h1>
                                    <p className="text-slate-400">{post.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
