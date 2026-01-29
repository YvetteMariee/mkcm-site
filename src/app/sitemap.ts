import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mkcm-consulting.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/conseil-it`, lastModified: new Date() },
    { url: `${baseUrl}/formation`, lastModified: new Date() },
    { url: `${baseUrl}/opportunites`, lastModified: new Date() },
    { url: `${baseUrl}/a-propos`, lastModified: new Date() },
  ];
}
