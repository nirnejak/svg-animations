import * as React from "react"

import config from "../config"

// INFO: Learn more at https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// INFO: Test at https://search.google.com/test/rich-results
export const renderSchemaTags = (): React.ReactNode => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication", // INFO: Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
          name: config.appName,
          description: config.appDescription,
          image: `${config.baseUrl}/icon.png`,
          url: `${config.baseUrl}/`,
          author: {
            "@type": "Person",
            name: config.authorName,
          },
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "26",
          },
          offers: [
            {
              "@type": "Offer",
              price: "9.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  )
}
