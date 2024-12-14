import type { Props as SEOProps } from 'astro-seo';
import { SITE_NAME, CONTACT } from './constants';

export type { SEOProps };

export const defaultSEO: SEOProps = {
  title: "Sklep zoologiczny Głogów | Animals",
  titleTemplate: "%s | Animals - Sklep zoologiczny Głogów",
  description: "Animals - najlepszy sklep zoologiczny w Głogowie. Karmy, akcesoria i profesjonalne porady. Odwiedź nas przy ul. Polska 5 w Głogowie lub zadzwoń: 886 147 831",
  openGraph: {
    basic: {
      title: "Animals - Sklep zoologiczny Głogów | Karmy i akcesoria dla zwierząt",
      type: "website",
      image: "/images/og-image.jpg",
    },
    optional: {
      siteName: SITE_NAME,
      description: "Animals - najlepszy sklep zoologiczny w Głogowie. Szeroki wybór karm i akcesoriów dla zwierząt. Profesjonalne doradztwo i konkurencyjne ceny.",
      locale: "pl_PL",
    }
  },
  extend: {
    meta: [
      { name: "keywords", content: "sklep zoologiczny Głogów, karma dla zwierząt Głogów, akcesoria dla zwierząt Głogów, Animals Głogów" },
      { name: "author", content: SITE_NAME },
      { name: "geo.region", content: "PL-DŚ" },
      { name: "geo.placename", content: "Głogów" },
      { name: "geo.position", content: "51.6621;16.0846" },
      { name: "ICBM", content: "51.6621, 16.0846" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "application/ld+json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PetStore",
          "name": SITE_NAME,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Polska 5",
            "addressLocality": "Głogów",
            "addressRegion": "Dolnośląskie",
            "postalCode": "67-200",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.6621",
            "longitude": "16.0846"
          },
          "openingHoursSpecification": [
            // Add your business hours
          ]
        })
      }
    ],
    link: [
      { rel: "icon", href: "/favicon.ico" }
    ]
  }
};