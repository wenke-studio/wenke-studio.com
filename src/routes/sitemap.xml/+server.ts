interface Page {
    path: string;
    lastMod: string;
    priority: number;
    changefreq: string;
}

const site = "https://www.wenke-studio.com";

const pages: Page[] = [
    { path: "", lastMod: "2025-06-04", priority: 0.8, changefreq: "daily" },
    { path: "about", lastMod: "2025-06-04", priority: 0.5, changefreq: "daily" }
];

const categories: Page[] = [
    // { path: "category/", lastMod: "2025-06-06", priority: 0.2, changefreq: "daily" },
];

const hashtags: Page[] = [
    // { path: "hashtag/", lastMod: "2025-06-06", priority: 0.2, changefreq: "daily" },
];

const posts: Page[] = [
    { path: "posts", lastMod: "2025-06-06", priority: 0.2, changefreq: "daily" }
];

const render = (pages: Page[]) =>
    pages.map((page) => ({
        path: `${site}/${page.path}`,
        lastMod: new Date(page.lastMod).toISOString(),
        priority: page.priority,
        changefreq: page.changefreq
    }));

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const body = sitemap([
        ...render(pages),
        ...render(categories),
        ...render(hashtags),
        ...render(posts)
    ]);
    const response = new Response(body);
    response.headers.set("Cache-Control", "max-age=0, s-maxage=3600");
    response.headers.set("Content-Type", "application/xml");
    return response;
}

const sitemap = (pages: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
      .map(
          (page) => `
  <url>
    <loc>${site}/${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <lastmod>${page.lastMod}</lastmod>
    <priority>${page.priority}</priority>
  </url>
  `
      )
      .join("")}
</urlset>`;
