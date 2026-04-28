import { useEffect } from "react";

const SITE_URL = "https://law-hankyul.com";
const DEFAULT_TITLE = "공동법률사무소 한결";
const DEFAULT_DESCRIPTION =
  "과정에서 신뢰를, 결과에서 만족을 드리는 공동법률사무소 한결입니다.";
const DEFAULT_IMAGE = `${SITE_URL}/og_img.png`;

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertStructuredData(id, schema) {
  let script = document.head.querySelector(`script[data-seo-schema="${id}"]`);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoSchema = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
}

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = "인천 변호사, 인천 학교폭력 변호사, 인천 의료소송 변호사, 공동법률사무소 한결, 한결칼럼",
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  structuredData,
}) => {
  useEffect(() => {
    const url = new URL(path, SITE_URL).toString();

    document.title = title;
    document.documentElement.setAttribute("lang", "ko");

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index,follow,max-image-preview:large" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: url });

    if (structuredData) {
      upsertStructuredData("page", structuredData);
    }
  }, [description, image, keywords, path, structuredData, title, type]);

  return null;
};

export default Seo;
