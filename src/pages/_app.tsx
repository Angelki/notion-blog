import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import '../lib/prism/prism.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)
