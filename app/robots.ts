import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.thedreamrentals.com/sitemap.xml",
    host: "https://www.thedreamrentals.com",
  };
}
