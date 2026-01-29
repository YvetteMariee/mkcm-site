import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.vercel.app";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/services`, lastModified },
    { url: `${baseUrl}/methodes`, lastModified },
    { url: `${baseUrl}/realisations`, lastModified },
    { url: `${baseUrl}/a-propos`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/mentions-legales`, lastModified },
  ];
}
