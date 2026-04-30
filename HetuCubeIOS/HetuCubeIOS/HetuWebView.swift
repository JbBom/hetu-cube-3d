import SwiftUI
import WebKit

struct HetuWebView: UIViewRepresentable {
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.allowsInlineMediaPlayback = true
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = context.coordinator
        webView.isOpaque = false
        webView.backgroundColor = .black
        webView.scrollView.backgroundColor = .black
        webView.scrollView.bounces = false
        webView.allowsBackForwardNavigationGestures = false
        if #available(iOS 16.4, *) {
            webView.isInspectable = true
        }

        loadContent(in: webView)
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {}

    private func loadContent(in webView: WKWebView) {
        let bundle = Bundle.main
        let htmlURL =
            bundle.url(forResource: "index", withExtension: "html", subdirectory: "Web") ??
            bundle.url(forResource: "index", withExtension: "html") ??
            bundle.url(forResource: "hetu-cube", withExtension: "html", subdirectory: "Web") ??
            bundle.url(forResource: "hetu-cube", withExtension: "html")

        guard let htmlURL else {
            webView.loadHTMLString(
                """
                <html>
                <body style="background:#050508;color:#f0d890;font-family:-apple-system;padding:24px;">
                  <h2>资源未找到</h2>
                  <p>App 没有打包进 <code>hetu-cube.html</code>。</p>
                </body>
                </html>
                """,
                baseURL: nil
            )
            return
        }

        webView.loadFileURL(htmlURL, allowingReadAccessTo: bundle.bundleURL)
    }

    final class Coordinator: NSObject, WKNavigationDelegate {
        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            print("HetuCube navigation failed:", error.localizedDescription)
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            print("HetuCube provisional navigation failed:", error.localizedDescription)
        }
    }
}
