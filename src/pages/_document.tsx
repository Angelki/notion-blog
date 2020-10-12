import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css"
          />
          <script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument

// 模型 https://github.com/Eikanya/Live2d-model
//  教程 https://zhaoolee.com/GBlog/2019/07/04/live2d/
