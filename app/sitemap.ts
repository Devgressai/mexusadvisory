import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { capabilities } from "@/content/capabilities";
import { focusTopics } from "@/content/focus";
import { people } from "@/content/people";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface RouteSpec {
  path: string;
  changeFrequency: ChangeFreq;
  priority: number;
}

const staticRoutes: RouteSpec[] = [
  { path: "/", changeFrequency: "monthly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/people", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about/offices", changeFrequency: "monthly", priority: 0.7 },
  { path: "/capabilities", changeFrequency: "monthly", priority: 0.9 },
  { path: "/partners-program", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
];

const dynamicRoutes: RouteSpec[] = [
  ...capabilities.map((c) => ({
    path: `/capabilities/${c.id}`,
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.7,
  })),
  ...focusTopics.map((f) => ({
    path: `/focus/${f.id}`,
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.6,
  })),
  ...people.map((p) => ({
    path: `/about/people/${p.id}`,
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.5,
  })),
];

const enUrl = (path: string) =>
  `${site.baseUrl}${path === "/" ? "" : path}`;
const esUrl = (path: string) =>
  `${site.baseUrl}/es${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.flatMap((route) => {
    const en = enUrl(route.path);
    const es = esUrl(route.path);
    const alternates = { languages: { en, es, "x-default": en } };

    return [
      {
        url: en,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
      },
      {
        url: es,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
      },
    ];
  });
}
