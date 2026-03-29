import { MetadataRoute } from "next";

const BASE_URL = "https://www.thedreamrentals.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL,                              lastModified: now, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE_URL}/properties`,              lastModified: now, changeFrequency: "hourly",  priority: 0.9 },
    { url: `${BASE_URL}/services`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/property-management`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/our-team`,                lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/case-study`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/best-neighborhoods-chicago-short-term-rental`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog/corporate-housing-chicago-guide`,              lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog/chicago-bachelorette-party-guide`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog/short-term-rental-host-tips`,                  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/blog/chicago-corporate-housing-vs-extended-stay-hotels`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog/chicago-vacation-rental-vs-hotel`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
