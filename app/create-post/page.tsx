"use client"
import ReactMarkdown from "react-markdown";
import React, {useState} from "react";
import {Textarea} from "@/components/shadcn/ui/textarea";
import markdownStyles from "@/app/posts/[...slug]/markdown-styles.module.css";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkRehype from "remark-rehype";
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
        <div className='w-full flex h-screen p-2'>
            <section className='w-full h-full border-r border-gray-300 p-4'>
                <div className="flex space-x-3 mb-2 border-white rounded-lg bg-gray-200 p-2">
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Heading</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>B</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><i>I</i></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>{`>`}</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>{`<>`}</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Link</b></button>
                    <div className="border-l dark:border-gray-300 border-gray-900 h-8 "/>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Numbered list</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Unordered List</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Task list</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Link</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Numbered list</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Unordered List</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Task list</b></button>
                    <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-md"><b>Table</b></button>

                </div>


                <textarea
                    placeholder="Write your markdown here"
                    onChange={handleChange}
                    value={markdown}
                    autoFocus={true}
                    className="w-full resize-none border rounded-md focus:outline-none focus:ring px-4 py-2 min-h-[75vh] max-h-[150vh]"
                />
            </section>
            <div className={"w-1/2 h-full p-4 overflow-auto whitespace-normal"}>
                <div className="prose max-w-none dark:prose-invert ">
                <ReactMarkdown
                className={markdownStyles["markdown"]}
                remarkPlugins={[remarkGfm, remarkParse, remarkStringify, remarkRehype]}
                rehypePlugins={[rehypeFormat, rehypeMinifyWhitespace, rehypeStringify]}
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