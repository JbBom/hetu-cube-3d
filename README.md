# hetu-cube-3d

河图立方体的三维交互可视化项目。

这是一个基于 `Three.js` 的静态前端作品，用 3D 交互的方式展示“河图立方体”这一实验性数理模型。项目重点在于可视化表达与交互体验：顶点落位、五行对应、生成关系、中轴流动、旋转面与季节演化，都可以在同一个页面中连续观看与操作。

## 项目特点

- 单文件网页为主，打开即用，部署简单
- 3D 交互浏览：旋转、聚焦、俯视、自转、复位
- 内置阶段式演化播放与讲解流程
- 本地打包了 `Three.js`，不依赖 CDN
- 附带 iOS WebView 壳工程，可作为 App 原型继续扩展

## 仓库结构

```text
hetu-cube-3d/
├── index.html
├── hetu-cube.html
├── three.min.js
├── HetuCubeIOS/
│   └── HetuCubeIOS/
│       └── Web/
├── THIRD_PARTY_NOTICES.md
├── LICENSE
└── README.md
```

## 如何运行

### 方式 1：直接打开

直接在浏览器打开 `index.html` 即可。

### 方式 2：本地静态服务

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://127.0.0.1:8080/
```

## GitHub Pages

仓库根目录提供 `index.html`，可以直接作为 GitHub Pages 的入口页面。

## iOS 壳工程

`HetuCubeIOS/` 目录包含一个基于 `WKWebView` 的 SwiftUI 壳工程，适合把网页版本快速封装为 iPhone/iPad 原型应用。

## 适用边界

这个项目更适合被理解为：

- 一个文化主题的交互可视化作品
- 一个实验性三维数理模型展示
- 一个前端 / Three.js / WebView 封装的样例项目

它**不应**被默认理解为学术定论、历史定论或科学证明。

## 第三方依赖

- `three.min.js`
  来源：Three.js r128
  许可证：MIT

详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 许可证

本项目采用 [MIT License](LICENSE)。
