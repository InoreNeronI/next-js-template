import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap" rel="stylesheet" />
          <Script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            strategy="beforeInteractive"
          ></Script>
          <Script
            defer
            src="/js/scroll-reveal.js"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            strategy="beforeInteractive"
          ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
