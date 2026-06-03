<div align="center">
  <img src="docs/assets/hetu-cube-banner.svg" alt="Hetu Cube 3D banner" width="100%" />
  <h1>🏔️ hetu-cube-3d</h1>
  <p><strong>河图洛书交互学习器</strong> —— 把河图立方体、洛书九宫、数理对照、入门讲解和知识测验整合到一个静态网页中。</p>
  <p>
    <a href="https://jbbom.github.io/hetu-cube-3d/"><img src="https://img.shields.io/badge/%F0%9F%9A%80_%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C-Demo-0F766E?style=for-the-badge" alt="Live Demo" /></a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Static%20Site-HTML%20%2B%20JS-111827?style=flat-square" alt="Static Site" />
    <img src="https://img.shields.io/badge/Three.js-r128-D4A853?style=flat-square" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/GitHub%20Pages-Ready-0F766E?style=flat-square" alt="GitHub Pages Ready" />
    <img src="https://img.shields.io/badge/License-MIT-2563EB?style=flat-square" alt="MIT License" />
    <img src="https://img.shields.io/github/stars/JbBom/hetu-cube-3d?style=flat-square" alt="GitHub stars" />
  </p>
</div>

> 这是一个基于 `Three.js` 的交互式静态前端项目。新版首页从单一的“河图立方体 3D 展示”扩展为“河图洛书交互学习器”，同时提供河图立方体、洛书九宫、河图与洛书对照、概念卡、入门步骤和知识测验。

---

## 📸 预览

<div align="center">
  <img src="docs/assets/screenshot-hero.png" alt="河图立方体 3D 交互截图" width="90%" />
  <p><em>▲ 河图立方体 3D 交互视图（首页）</em></p>
  <br/>
  <img src="docs/assets/screenshot-full.png" alt="完整页面截图" width="90%" />
  <p><em>▲ 完整页面：洛书九宫 + 概念卡 + 知识测验</em></p>
</div>

---

## 🎯 项目定位

| ✅ 适合被理解为 | ❌ 不应被默认理解为 |
|:---|:---|
| 文化主题的交互可视化作品 | 学术定论 |
| 面向初学者的河图洛书学习页面 | 历史定论 |
| 实验性三维模型与九宫格对照展示 | 科学证明 |
| 可继续封装为 GitHub Pages / App 原型 | — |

## ✨ 核心特性

| 类别 | 说明 |
|:---|:---|
| 🖥️ 运行方式 | 单页静态网页，直接打开或静态托管即可运行 |
| 📦 依赖 | 本地打包 `Three.js`，不依赖外部 CDN |
| 🎨 学习视图 | 河图立方体 / 洛书九宫 / 二者对照，三种自由切换 |
| 🎬 交互 | 阶段式演化播放、聚焦查看、讲解提示、顶点详情面板 |
| 📚 内容 | 概念卡、入门引导、知识测验、分享入口 |
| 📱 适配 | 桌面浏览 + 移动端展示 |
| 🍎 iOS 原型 | 附带 `WKWebView` 封装壳，可快速封装为 iPhone / iPad App |

## 🔗 在线体验

> **https://jbbom.github.io/hetu-cube-3d/**

仓库已放置 `.nojekyll`，避免 GitHub Pages 上 Jekyll 干扰静态资源。

---

## 🚀 本地运行

**方式一：** 直接双击打开 `index.html`

**方式二：** 启动本地静态服务：

```bash
python3 -m http.server 8080
# 然后访问 http://127.0.0.1:8080/
```

## 📱 iOS 壳工程

`HetuCubeIOS/` 目录提供基于 `SwiftUI + WKWebView` 的轻量壳工程：

- 快速把网页版封装成 iOS 演示原型
- 验证本地静态资源在 App 内的加载效果
- 在不重写前端逻辑的前提下继续延展成轻应用

壳工程会优先加载 `Web/index.html`，并随仓库同步新版 `assets/` 静态资源。

## 📁 仓库结构

```text
hetu-cube-3d/
├── index.html              # 主入口（GitHub Pages）
├── hetu-cube.html          # 独立立方体展示页
├── three.min.js            # Three.js r128 本地副本
├── assets/                 # 打包后的 CSS / JS
│   ├── index-*.css
│   └── index-*.js
├── docs/
│   └── assets/             # 文档配图
│       ├── hetu-cube-banner.svg
│       ├── screenshot-hero.png
│       └── screenshot-full.png
├── HetuCubeIOS/            # iOS 壳工程（SwiftUI + WKWebView）
│   └── HetuCubeIOS/
│       ├── ContentView.swift
│       ├── HetuCubeApp.swift
│       ├── HetuWebView.swift
│       └── Web/
├── README.md
├── LICENSE                 # MIT
├── THIRD_PARTY_NOTICES.md
└── RELEASE_NOTES_*.md      # 版本发布日志
```

## 🛠️ 技术信息

| 维度 | 详情 |
|:---|:---|
| 渲染引擎 | `Three.js` r128 |
| 页面形态 | 静态 HTML + 打包 JS/CSS |
| 交互方式 | 轨道控制、射线拾取、阶段动画、聚焦切换、九宫格对照、概念卡与测验 |
| 发布方式 | 本地打开 / 静态服务器 / GitHub Pages / iOS WebView |

---

## 📦 第三方依赖

- **`three.min.js`** — Three.js r128（MIT License）

详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

---

## 📄 许可证

本项目采用 [MIT License](LICENSE)。
