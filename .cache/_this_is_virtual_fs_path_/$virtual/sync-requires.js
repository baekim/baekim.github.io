
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("C:\\blog\\.cache\\dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("C:\\blog\\src\\pages\\404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("C:\\blog\\src\\pages\\index.tsx")),
  "component---src-pages-info-tsx": preferDefault(require("C:\\blog\\src\\pages\\info.tsx"))
}

