
export default {
  basePath: 'https://ghislain1.github.io/personal',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
