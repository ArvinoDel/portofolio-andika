import React from "react";
import Head from "next/head";
import { seoData } from "../portfolio";

const SEO = () => {
  const {
    title,
    author,
    description,
    keywords,
    url,
    image
  } = seoData;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url,
    author: {
      "@type": "Person",
      name: author,
      "url": url,
      "image": image,
      "jobTitle": "Full Stack Developer & Project Manager",
      "sameAs": [
        "https://www.linkedin.com/in/andika-supriyadi-nur-maulana/",
        "https://github.com/ArvinoDel/"
      ]
    },
    description,
    image
  };

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={title} />
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="canonical" href={url} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`Preview image for ${title}`} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;
