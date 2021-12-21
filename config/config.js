const config = {
  mode: 'site',
  title: '珠峰架构笔记',
  description: '架构|思路|效率',
  publicPath: '/',
  base: '/',
  exportStatic: {},
  dynamicImport: {},
  theme: {
    '@primary-color': '#00A7D6',
  },
  navs: [
    null
  ]
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;