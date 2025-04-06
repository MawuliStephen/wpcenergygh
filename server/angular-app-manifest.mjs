
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/wpcenergygh/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2354, hash: 'b0bfb8a7f1f22fede41ce33eed7fd1007d517e61802f77e0d8fd1ea496d086a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'c1d3b9ad55fb7674235fa2cb64bc82a89e673056885de5189c4dff23c8205ab2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-22STZIZZ.css': {size: 30310, hash: 'PhJFvNxXpLQ', text: () => import('./assets-chunks/styles-22STZIZZ_css.mjs').then(m => m.default)}
  },
};
