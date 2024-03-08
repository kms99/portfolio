import Head from 'next/head';
import React from 'react';

export default function OpenGraph() {
  return (
    <Head>
      <title>FE 김명섭 포트폴리오</title>
      <meta name="description" content="어서오세요. 웹 프론트엔드 개발자 김명섭입니다." />
      <meta name="keywords" content="웹프론트엔드, 포트폴리오, 웹개발자, 프론트엔드" />
      <meta name="author" content="Kim MyungSUb" />

      {/* Facebook */}
      <meta property="og:url" content="https://kimmyungsub-portfolio.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FE 김명섭 포트폴리오" />
      <meta property="og:title" content="FE 김명섭 포트폴리오" />
      <meta property="og:description" content="어서오세요. 웹 프론트엔드 개발자 김명섭입니다." />
      <meta
        property="og:image"
        content="https://jeaukpjgukscmujtxqot.supabase.co/storage/v1/object/public/seo/seo.png"
      />
    </Head>
  );
}
