import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import '../lib/prism/prism.css'

export default ({ Component, pageProps }) => (
  <>
    <style jsx global>
      {`
        @font-face {
          font-family: Dankmono;
          src: url('/fonts/dankmono.ttf');
        }

        @font-face {
          font-family: Dankmono-it;
          src: url('/fonts/dankmono-it.ttf');
        }
      `}
    </style>
    <Component {...pageProps} />
    <Footer />
  </>
)
