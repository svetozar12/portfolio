import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" title="Svetozar Gospodinov">
      <Head>
        <meta name="description" content="Svetozar Gospodinov Portfolio." />
        <meta
          name="keywords"
          content="nextjs, seo, meta tags, freelancing, gql, fullstack"
        />
        <meta name="author" content="Svetozar Gospodinov" />
        <meta property="og:title" content="Svetozar Gospodinov" />
        <meta
          property="og:description"
          content="This is a description of your page."
        />
        <meta
          property="og:image"
          content="https://gospodinovs.com/path-to-your-image.jpg"
        />
        <meta property="og:url" content="https://gospodinovs.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
