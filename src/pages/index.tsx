import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>遗忘 · 笔</h1>
      <h2>技术的矫揉造作，人生的无病呻吟</h2>
    </div>
  </>
)
