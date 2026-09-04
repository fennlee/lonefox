# lonefox

Astro 个人 webhome。白纸，一粒狐火。不是博客主题。

[English](README.md)

## 它是什么

一列。日间底色 `#FFFFFF`。夜间是另一间房。狐火是唯一大声的颜色。

Fork 之后改 `lonefox.config.ts`，把文章放进 `src/content/blog/`。不要改房间顺序。

## 开始

```bash
npm install
npm run dev -- --host
npm run build
```

需要 Node 22+。

可当 GitHub Template 使用，或：

```bash
git clone https://github.com/1907/lonefox.git
cd lonefox
```

## 配置

身份都在 [`lonefox.config.ts`](lonefox.config.ts)：

- `site` — 站名、中心句、域名、邮箱、github
- `home` — 首页房间
- `about` — 关于
- `archive` — 三架标签

色值在 `src/styles/global.css`（`:root` 与 `[data-theme="dark"]`）。只改 hex，不要加第二种强调色。

换掉 `public/favicon.svg`。肖像可选。

## 房间

| 路径 | |
|---|---|
| `/` | 窝 |
| `/archive/` | 三架：tech / notes / travel |
| `/about/` | 关于 |
| 404 | 路断了 |

文章页 older / newer 布局是定稿。

## 开发

```bash
npm run check
npm run build
```

见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

[MIT](LICENSE)。Copyright (c) 2026 1907.
