# lonefox

一套简洁的 Astro 博客主题。浅色 / 深色。一列，一个强调色。

[English](README.md)

可直接当 GitHub 模板使用，或作为依赖，在站点根目录放自己的 `lonefox.config.ts`。

## 特性

- Markdown 文章（`src/content/blog/`）
- 首页、归档、关于、域名、404、RSS、sitemap
- 浅色 / 深色
- 一份配置：`lonefox.config.ts`

## 快速开始

```bash
git clone https://github.com/1907/lonefox.git
cd lonefox
npm install
npm run dev
```

需要 Node 22+。

## 目录

```text
/
├── lonefox.config.ts     # 站点、首页、关于、归档
├── src/
│   ├── content/blog/     # 文章
│   ├── pages/
│   ├── layouts/
│   ├── components/
│   └── styles/global.css # 颜色
└── public/
```

文章字段：`title`、`date`、`description`、`category`（`tech` | `notes` | `travel` | `poem`），可选 `location`、`cover`、`images`。

## 配置

改 [`lonefox.config.ts`](lonefox.config.ts)：

| 字段 | |
|---|---|
| `site` | 站名、简介、域名、邮箱、github、favicon、页底年份 |
| `nav` | 导航 |
| `home` | 首页文案 |
| `about` | 关于页 |
| `archive` | 归档标签 |
| `domains` | 可选米表（空则不用） |

颜色在 `src/styles/global.css`。

## 命令

| 命令 | |
|---|---|
| `npm run dev` | 本地预览 |
| `npm run build` | 生产构建 |
| `npm run check` | 类型检查 |
| `npm run preview` | 预览 `dist/` |

## 许可证

[MIT](LICENSE)
