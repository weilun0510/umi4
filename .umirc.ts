// 配置文件
import Themes from './src/styles/themes/templates';
export default {
  npmClient: 'pnpm',
  title: 'Aleo Pool',
  plugins: ['@umijs/plugins/dist/locale', '@umijs/plugins/dist/antd'],  // 单独安装@umijs/plugins后，启用 i18n、antd 插件
  locale: {
    antd: true, // antd国际化。如果项目依赖中包含 `antd`，则默认为 true
    baseSeparator: '-',
    title: false,
    useLocalStorage: true,
    baseNavigator: true,
    default: 'zh-TW', // 使用 src/locales/zh-TW.ts 作为多语言文件
  },
  antd: {
    // configProvider
    configProvider: {},
    // themes
    dark: false,
    compact: false,
    // babel-plugin-import
    import: true,
    // less or css, default less
    style: 'less',
  },
  history: {
    type: 'hash'
  },
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: 'Index' },
    { path: '/dashboard', component: '@/layouts/Dashboard', redirect: '/dashboard/index' },
    { path: '/dashboard/index', component: 'Dashboard/Index' },
  ],
  // Theme for antd
  // https://ant.design/docs/react/customize-theme
  theme: Themes.light,
};
