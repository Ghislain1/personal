
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ghislain1.github.io/personal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/personal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 548, hash: '115b19eaa80132be1f1f22537273874edfdd2bee4b4d3a9febcd459b91c3a8e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: '3e69d2acd17cc890f7fd91e624b4c96d22d7ce0a0effc3d37521d8a210be1f7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21678, hash: '4d399432da4702c44f5353ef4bf8ccd9bca0cbfe529ec625d296828b1a9dd8c7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
