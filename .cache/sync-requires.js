// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-template-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/templates/post-template.jsx")),
  "component---src-templates-tag-template-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/templates/tag-template.jsx")),
  "component---src-templates-category-template-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/templates/category-template.jsx")),
  "component---src-templates-page-template-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/templates/page-template.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/pages/404.jsx")),
  "component---src-pages-categories-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/pages/categories.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/pages/index.jsx")),
  "component---src-pages-tags-jsx": preferDefault(require("/Users/oj/code/personal/personal-blog-gatsby/src/pages/tags.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/layout-index.json"),
  "posts-a-brief-history-of-typography.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/posts-a-brief-history-of-typography.json"),
  "tags-linotype.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-linotype.json"),
  "tags-monotype.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-monotype.json"),
  "tags-history-of-typography.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-history-of-typography.json"),
  "tags-helvetica.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-helvetica.json"),
  "categories-design-inspiration.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/categories-design-inspiration.json"),
  "posts-perfecting-the-art-of-perfection.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/posts-perfecting-the-art-of-perfection.json"),
  "tags-handwriting.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-handwriting.json"),
  "tags-learning-to-write.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-learning-to-write.json"),
  "posts-the-origins-of-social-stationery-lettering.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/posts-the-origins-of-social-stationery-lettering.json"),
  "tags-typefaces.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-typefaces.json"),
  "tags-lettering.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-lettering.json"),
  "tags-history.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-history.json"),
  "categories-design-culture.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/categories-design-culture.json"),
  "posts-the-birth-of-movable-type.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/posts-the-birth-of-movable-type.json"),
  "tags-open-source.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-open-source.json"),
  "tags-gatsby.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-gatsby.json"),
  "tags-typography.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-typography.json"),
  "categories-typography.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/categories-typography.json"),
  "posts-humane-typography-in-the-digital-age.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/posts-humane-typography-in-the-digital-age.json"),
  "tags-design.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-design.json"),
  "tags-web-development.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags-web-development.json"),
  "about.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/about.json"),
  "contact.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/contact.json"),
  "software.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/software.json"),
  "marketing.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/marketing.json"),
  "dev-404-page.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/404.json"),
  "categories.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/categories.json"),
  "index.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/index.json"),
  "tags.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/tags.json"),
  "404-html.json": require("/Users/oj/code/personal/personal-blog-gatsby/.cache/json/404-html.json")
}