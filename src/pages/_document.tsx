import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

// 模型 https://github.com/Eikanya/Live2d-model
//  教程 https://zhaoolee.com/GBlog/2019/07/04/live2d/
