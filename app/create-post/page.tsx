"use client"
import ReactMarkdown from "react-markdown";
import React, {useState} from "react";
import {Textarea} from "@/components/shadcn/ui/textarea";
import markdownStyles from "@/app/posts/[...slug]/markdown-styles.module.css";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import rehypeStringify from "rehype-stringify";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {prism} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CreateBlogPage() {
    const [markdown, setMarkdown] = useState('## markdown preview');

    const handleChange = (e: any) => {
        setMarkdown(e.target.value);
    };


    return (
        <div className='flex h-screen'>
            <section className='w-1/2 border-r border-gray-300 p-4'>
                <Textarea placeholder={"Write your markdown here"} onChange={handleChange} value={markdown}
                          autoFocus={true}
                          className={"w-full resize-none border rounded-md focus:outline-none focus:ring "}/>
            </section>
            <div className={"w-1/2 p-4 "}>
                <div className="prose max-w-none dark:prose-invert ">
                    <ReactMarkdown
                        className={markdownStyles["markdown"]}
                        remarkPlugins={[remarkGfm, remarkParse, remarkStringify, remarkRehype]}
                        rehypePlugins={[rehypeRaw, rehypeFormat, rehypeMinifyWhitespace, rehypeStringify]}
                        components={{
                            code({node, inline, className, children, ...props}: any) {
                                const match = /language-(\w+)/.exec(className || '');

                                return !inline && match ? (
                                    <SyntaxHighlighter style={prism} PreTag="div" language={match[1]} {...props}
                                                       className={"not-prose"}>
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}