import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main>
        {/*<Navbar />*/}
        <Component {...pageProps} />
        <footer className="relative bottom-0 w-full flex py-3 p-6 text-start">
          <div className={"secondary container items-start justify-start md:ml-12"}>
            <span className={"font-bold"}>©1998-2024 TechKnights</span>
          </div>
          <Link
              target={"_blank"}
              className="main flex justify-items-end gap-1 text-current"
              href="https://github.com/Team334"
              title="Team 334"
          >
            <span className={"secondary"}>Made by</span>
            <p className="text-primary">Ze Rui Zheng</p>
          </Link>
        </footer>
      </main>
  )
}
