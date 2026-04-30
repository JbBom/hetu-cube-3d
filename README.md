# hetu-cube-3d

河图立方体的三维交互可视化作品。

这是一个基于 `Three.js` 的静态前端项目，用 3D 交互与阶段演化的方式展示“河图立方体”这一实验性数理模型。页面把顶点落位、五行对应、生成关系、中轴流动、旋转面与四时变化整合到同一个浏览空间里，更适合作为一个可交互作品来看，而不是一张静态示意图。

## 项目预览

- 3D 立方体主视图
- 阶段式演化播放
- 顶点点击查看详情
- 聚焦查看成对关系
- 俯视 / 自转 / 复位等交互控制
- 附带 iOS WebView 壳工程

## 这个项目适合怎么理解

它更适合作为下面三类东西之一：

- 一个文化主题的交互可视化作品
- 一个实验性三维数理模型展示
- 一个前端静态页 + iOS WebView 封装样例

它**不应**被默认理解为：

- 学术定论
- 历史定论
- 科学证明

## 特点

- 单页静态网页，部署简单
- 本地打包 `Three.js`，不依赖 CDN
- 桌面端和移动端都可浏览
- 演化步骤、讲解、聚焦和信息面板都已内置
- 代码结构适合继续做 GitHub Pages 展示或 App 原型封装

## 仓库结构

```text
hetu-cube-3d/
├── index.html
├── hetu-cube.html
├── three.min.js
├── HetuCubeIOS/
│   └── HetuCubeIOS/
│       ├── ContentView.swift
│       ├── HetuCubeApp.swift
│       ├── HetuWebView.swift
│       └── Web/
├── README.md
├── LICENSE
├── THIRD_PARTY_NOTICES.md
└── RELEASE_NOTES_v1.0.0.md
```

## 本地运行

### 方式 1：直接打开

直接在浏览器中打开 `index.html`。

### 方式 2：本地静态服务

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://127.0.0.1:8080/
```

## GitHub Pages

仓库根目录已经提供 `index.html`，可以直接作为 GitHub Pages 入口页面使用。

如果启用 Pages，通常不需要额外改目录结构。

## iOS 壳工程

`HetuCubeIOS/` 目录包含一个基于 `WKWebView` 的 SwiftUI 壳工程，可用于：

- 把网页版本快速封装成 iPhone / iPad 原型
- 验证 Web 内容在 App 壳中的加载效果
- 继续扩展成本地化的轻应用

## 技术信息

- 渲染：`Three.js`
- 形态：静态 HTML + 内联脚本
- 交互：自定义轨道控制、射线拾取、阶段动画、聚焦与讲解
- 兼容方式：Web 页面 + iOS WebView

## 第三方依赖

- `three.min.js`
  - 来源：Three.js r128
  - 许可证：MIT

详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 发布说明

首个公开版本为 `v1.0.0`，包含：

- GitHub Pages 友好的入口文件
- 清理后的项目首页说明
- iOS 壳工程
- MIT License
- 第三方依赖说明

## 许可证

本项目采用 [MIT License](LICENSE)。
