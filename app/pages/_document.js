import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta Tags untuk SEO dan lainnya */}
          <meta name="description" content="Your site description here" />
          <meta property="og:title" content="Title of Your Website" />
          <meta property="og:description" content="Description for Open Graph" />
          <meta property="og:image" content="https://linktoyourimage.com/image.jpg" />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@yourtwitterhandle" />
          <meta name="twitter:title" content="Title of Your Website" />
          <meta name="twitter:description" content="Description for Twitter" />
          <meta name="twitter:image" content="https://linktoyourimage.com/image.jpg" />
          <link rel="icon" href="/favicon.ico" />
          {/* Tambahkan tag lainnya seperti Google Fonts atau lainnya jika diperlukan */}
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
