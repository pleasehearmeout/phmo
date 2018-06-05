// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jaehoonlee/phmo/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jaehoonlee/phmo/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jaehoonlee/phmo/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jaehoonlee/phmo/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jaehoonlee/phmo/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/jaehoonlee/phmo/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jaehoonlee/phmo/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/jaehoonlee/phmo/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/jaehoonlee/phmo/.cache/json/404.json"),
  "about.json": require("/Users/jaehoonlee/phmo/.cache/json/about.json"),
  "index.json": require("/Users/jaehoonlee/phmo/.cache/json/index.json"),
  "page-2.json": require("/Users/jaehoonlee/phmo/.cache/json/page-2.json"),
  "404-html.json": require("/Users/jaehoonlee/phmo/.cache/json/404-html.json")
}