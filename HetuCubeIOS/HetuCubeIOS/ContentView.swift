import SwiftUI

struct ContentView: View {
    var body: some View {
        HetuWebView()
            .ignoresSafeArea()
            .background(Color.black)
            .preferredColorScheme(.dark)
    }
}

#Preview {
    ContentView()
}
