import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Zakupy dostarczymy do Ciebie nawet w 10 min lub zaplanuj na czas, który Ci odpowiada. Świeże produkty i specjalne oferty w zasięgu jednego kliknięcia.',
  author = 'Shopawei',
  meta,
  title = 'Shopawei - dostarczanie zakupów na życzenie',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
