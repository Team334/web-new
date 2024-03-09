"use client"
import ReactMarkdown from "react-markdown";
import React, {useRef, useState} from "react";
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
    const [markdown, setMarkdown] = useState("");
    const [cursorPosition, setCursorPosition] = useState(0);
    const textareaRef = useRef(null);

    React.useEffect(() => {
        const savedText = localStorage.getItem('savedText');
        if (savedText) {
            setMarkdown(savedText);
        }
    }, []);

    const handleChange = (e: any) => {
        setMarkdown(e.target.value);
        localStorage.setItem('savedText', e.target.value);
    };

    const handleButtonClick = (markdownText: string) => {
        setMarkdown((prevMarkdown) => {
            // @ts-ignore
            const selectionStart = textareaRef.current.selectionStart;
            // @ts-ignore
            const selectionEnd = textareaRef.current.selectionEnd;

            const updatedMarkdown =
                // @ts-ignore
                prevMarkdown.slice(0, selectionStart) +
                markdownText +
                // @ts-ignore
                prevMarkdown.slice(selectionEnd);

            setCursorPosition(selectionStart + markdownText.length);
            return updatedMarkdown;
        });
        // @ts-ignore
        textareaRef.current.focus();
    };

    const handleTextareaClick = () => {
        // @ts-ignore
        textareaRef.current.focus();
    };

    const handleCursorPositionChange = (e: any) => {
        setCursorPosition(e.target.selectionStart);
    };



    return (
        <div className='w-full flex h-screen p-2'>
            <section className='w-full h-full border-r border-gray-300 p-4'>
                <div className="flex space-x-3 mb-2 border-white rounded-lg bg-gray-200 p-2">
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Heading"}
                        onClick={() => handleButtonClick('# Heading')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-heading Button-visual">
                            <path
                                d="M3.75 2a.75.75 0 0 1 .75.75V7h7V2.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.5h-7v4.75a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 3.75 2Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Bold"}
                        onClick={() => handleButtonClick('****')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-bold Button-visual">
                            <path
                                d="M4 2h4.5a3.501 3.501 0 0 1 2.852 5.53A3.499 3.499 0 0 1 9.5 14H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 7v3h4.5a1.5 1.5 0 0 0 0-3Zm3.5-2a1.5 1.5 0 0 0 0-3H5v3Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Italic"}
                        onClick={() => handleButtonClick('**')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-italic Button-visual">
                            <path
                                d="M6 2.75A.75.75 0 0 1 6.75 2h6.5a.75.75 0 0 1 0 1.5h-2.505l-3.858 9H9.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.505l3.858-9H6.75A.75.75 0 0 1 6 2.75Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Quote"}
                        onClick={() => handleButtonClick('> ')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-quote Button-visual">
                            <path
                                d="M1.75 2.5h10.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Zm4 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2.5 7.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Code"}
                        onClick={() => handleButtonClick('\n```\n```')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-code Button-visual">
                            <path
                                d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Link"}
                        onClick={() => handleButtonClick('[]()')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-link Button-visual">
                            <path
                                d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                        </svg>
                    </button>
                    <div className="border-l dark:border-gray-300 border-gray-900 h-8 "/>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"List Ordered"}
                        onClick={() => handleButtonClick('\n1. ')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-list-ordered Button-visual">
                            <path
                                d="M5 3.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 3.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM.924 10.32a.5.5 0 0 1-.851-.525l.001-.001.001-.002.002-.004.007-.011c.097-.144.215-.273.348-.384.228-.19.588-.392 1.068-.392.468 0 .858.181 1.126.484.259.294.377.673.377 1.038 0 .987-.686 1.495-1.156 1.845l-.047.035c-.303.225-.522.4-.654.597h1.357a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5c0-1.005.692-1.52 1.167-1.875l.035-.025c.531-.396.8-.625.8-1.078a.57.57 0 0 0-.128-.376C1.806 10.068 1.695 10 1.5 10a.658.658 0 0 0-.429.163.835.835 0 0 0-.144.153ZM2.003 2.5V6h.503a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1h.503V3.308l-.28.14a.5.5 0 0 1-.446-.895l1.003-.5a.5.5 0 0 1 .723.447Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Unordered List"}
                        onClick={() => handleButtonClick('\n- ')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-list-unordered Button-visual">
                            <path
                                d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                        title={"Tasklist"}
                        onClick={() => handleButtonClick('\n- [] ')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-tasklist Button-visual">
                            <path
                                d="M2 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm4.655 8.595a.75.75 0 0 1 0 1.06L4.03 14.28a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.095-2.095a.75.75 0 0 1 1.06 0ZM9.75 2.5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm-7.25-9v3h3v-3Z"></path>
                        </svg>
                    </button>
                    <button
                        className="px-2 py-1 text-white rounded-md"
                        title={"Table"}
                        onClick={() => handleButtonClick('\n| Name | Name |\n| ------- | ------- | \n| Values | Values |')}
                    >
                        <svg aria-hidden="true" data-view-component="true" xmlns="http://www.w3.org/2000/svg" width="16"
                             height="16" viewBox="0 0 16 16">
                            <g xmlns="http://www.w3.org/2000/svg"
                               transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)" fill="#000000"
                               stroke="none">
                                <path
                                    d="M6 134 c-8 -20 -8 -78 0 -98 9 -23 139 -23 148 0 8 20 8 78 0 98 -9 23 -139 23 -148 0z m44 -19 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m45 6 c7 -12 -12 -24 -25 -16 -11 7 -4 25 10 25 5 0 11 -4 15 -9z m45 -6 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m-90 -35 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m50 0 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z m40 0 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-92 -32 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z m47 3 c7 -12 -12 -24 -25 -16 -11 7 -4 25 10 25 5 0 11 -4 15 -9z m45 -7 c0 -9 -5 -14 -12 -12 -18 6 -21 28 -4 28 9 0 16 -7 16 -16z"/>
                            </g>
                        </svg>
                    </button>
                    <div className="border-l dark:border-gray-300 border-gray-900 h-8 "/>
                    <button
                        className="px-2 py-1 text-white rounded-md"
                        title={"Table"}
                        onClick={() => handleButtonClick('\n![Name](url)')}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="octicon octicon-paperclip Button-visual">
                            <path
                                d="M12.212 3.02a1.753 1.753 0 0 0-2.478.003l-5.83 5.83a3.007 3.007 0 0 0-.88 2.127c0 .795.315 1.551.88 2.116.567.567 1.333.89 2.126.89.79 0 1.548-.321 2.116-.89l5.48-5.48a.75.75 0 0 1 1.061 1.06l-5.48 5.48a4.492 4.492 0 0 1-3.177 1.33c-1.2 0-2.345-.487-3.187-1.33a4.483 4.483 0 0 1-1.32-3.177c0-1.195.475-2.341 1.32-3.186l5.83-5.83a3.25 3.25 0 0 1 5.553 2.297c0 .863-.343 1.691-.953 2.301L7.439 12.39c-.375.377-.884.59-1.416.593a1.998 1.998 0 0 1-1.412-.593 1.992 1.992 0 0 1 0-2.828l5.48-5.48a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-5.48 5.48a.492.492 0 0 0 0 .707.499.499 0 0 0 .352.154.51.51 0 0 0 .356-.154l5.833-5.827a1.755 1.755 0 0 0 0-2.481Z"></path>
                        </svg>
                    </button>

                </div>


                <textarea
                    placeholder="Write your markdown here"
                    value={markdown}
                    autoFocus={true}
                    ref={textareaRef}
                    onChange={handleChange}
                    onClick={handleTextareaClick}
                    onSelect={handleCursorPositionChange}
                    className="w-full resize-none border rounded-md focus:outline-none focus:ring px-4 py-2 min-h-[75vh] max-h-[150vh]"
                />
            </section>
            <div className={"w-full text-wrap break-words h-full p-4 overflow-x-hidden whitespace-normal max-h-[85vh]"}>
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