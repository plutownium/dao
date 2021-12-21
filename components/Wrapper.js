import Head from "next/head";

import Header from "./Header";

import Link from "next/link";

export default function Wrapper({ children, page }) {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "Sauce DAO"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={"Sauce DAO"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div>
          <div className="grid grid-cols-8 gap-4">
            <aside
              data-testid="aside-nav-bar"
              className="flex flex-col h-screen bg-black fixed items-center p-2 space-y-12"
            >
              <div className="flex-grow"></div>
              <Link href="/vote">
                <a>
                  <i
                    style={{ fontSize: "32px" }}
                    className="bi bi-bank m-2"
                  ></i>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <i
                    style={{ fontSize: "32px" }}
                    className="bi bi-house m-2"
                  ></i>
                </a>
              </Link>
              <Link href="/propose">
                <a>
                  <i
                    style={{ fontSize: "32px" }}
                    className="bi bi-pencil-square m-2"
                  ></i>
                </a>
              </Link>
              <div className="flex-grow"></div>
            </aside>
            <div className="flex flex-col items-center col-start-2 col-end-9">
              <div className="space-y-12 p-8 md:p-12 md:pr-24">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
      {!page && (
        // <div className={styles.backToHome}>
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
