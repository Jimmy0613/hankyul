import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://law-hankyul.com";
const ROOT_DIR = process.cwd();
const ENV_PATH = path.join(ROOT_DIR, ".env");
const SITEMAP_PATH = path.join(ROOT_DIR, "public", "sitemap.xml");

const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/About/hello", priority: "0.7" },
  { path: "/About/team", priority: "0.7" },
  { path: "/About/special", priority: "0.7" },
  { path: "/Service/medical", priority: "0.9" },
  { path: "/Service/medical/doctor", priority: "0.8" },
  { path: "/Service/medical/patient", priority: "0.8" },
  { path: "/Service/school", priority: "0.9" },
  { path: "/Service/criminal", priority: "0.7" },
  { path: "/Service/civil", priority: "0.7" },
  { path: "/Service/family", priority: "0.7" },
  { path: "/Service/labor", priority: "0.7" },
  { path: "/Case", priority: "0.7" },
  { path: "/Column", priority: "0.9" },
  { path: "/Contact/directions", priority: "0.7" },
  { path: "/Contact/book", priority: "0.8" },
];

function xmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function loadEnvFile() {
  try {
    const envText = await fs.readFile(ENV_PATH, "utf8");
    return Object.fromEntries(
      envText
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"))
        .map((line) => {
          const [key, ...rest] = line.split("=");
          return [key, rest.join("=")];
        }),
    );
  } catch {
    return {};
  }
}

async function fetchColumnRoutes() {
  const env = await loadEnvFile();
  const supabaseUrl = process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return [];
  }

  const requestUrl = new URL("/rest/v1/column_posts", supabaseUrl);
  requestUrl.searchParams.set("select", "id,published_at,updated_at,created_at");
  requestUrl.searchParams.set("is_public", "eq.true");
  requestUrl.searchParams.set("order", "published_at.desc.nullslast,created_at.desc");

  const response = await fetch(requestUrl, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch column posts for sitemap: ${response.status}`);
  }

  const posts = await response.json();
  return posts.map((post) => ({
    path: `/Column/${post.id}`,
    priority: "0.8",
    lastmod: post.updated_at || post.published_at || post.created_at || new Date().toISOString(),
  }));
}

async function generateSitemap() {
  const now = new Date().toISOString();
  let columnRoutes = [];

  try {
    columnRoutes = await fetchColumnRoutes();
  } catch (error) {
    console.warn(error.message);
  }

  const routes = [
    ...staticRoutes.map((route) => ({
      ...route,
      lastmod: now,
    })),
    ...columnRoutes,
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(
      (route) => `  <url>
    <loc>${xmlEscape(`${SITE_URL}${route.path}`)}</loc>
    <lastmod>${xmlEscape(route.lastmod)}</lastmod>
    <priority>${route.priority}</priority>
  </url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");

  await fs.writeFile(SITEMAP_PATH, xml, "utf8");
  console.log(`Generated sitemap with ${routes.length} URLs.`);
}

generateSitemap().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
