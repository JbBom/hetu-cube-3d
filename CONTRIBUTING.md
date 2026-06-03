# 参与贡献

感谢你对 **河图洛书 · 交互学习器** 的兴趣！

## 项目性质

这是一个文化主题的交互可视化作品，旨在以 Three.js 3D 形式展示河图立方体和洛书九宫的数理结构。它：

- ✅ 适合作为教育演示、交互实验、前端学习参考
- ❌ 不代表学术定论或历史定论

## 如何贡献

欢迎以下形式的贡献：

- 🐛 **Bug 反馈** — 提交 [Issue](https://github.com/JbBom/hetu-cube-3d/issues)，附上浏览器、操作系统、复现步骤
- 💡 **功能建议** — 在 Issue 中讨论新功能或改进方向
- 📖 **文档改进** — README、注释、翻译
- 🎨 **UI/UX 优化** — 移动端适配、无障碍、视觉调整
- 🔧 **代码 PR** — 修复或小幅改进

## Pull Request 流程

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature-name`
3. 提交变更：`git commit -m 'feat: 添加某功能'`
4. 推送分支：`git push origin feature/your-feature-name`
5. 提交 Pull Request

### Commit 约定

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档变更
- `style:` 格式化、视觉调整
- `refactor:` 代码重构

## 技术栈

- **Three.js** r128 — 本地打包，不依赖外部 CDN
- 纯静态 HTML + JS + CSS
- 不与任何构建工具绑定

## 本地开发

```bash
python3 -m http.server 8080
# 访问 http://127.0.0.1:8080/
```

## 许可证

本项目采用 [MIT License](LICENSE)。贡献即表示你同意在此许可证下发布你的代码。
