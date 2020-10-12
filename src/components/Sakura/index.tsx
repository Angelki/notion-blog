import React from 'react'
import styles from './index.module.css'

export const Sakura = ({ count }) => {
  const renderPetal = count =>
    Array.from({ length: count }, (v, idx) => `petal${idx}`).map(str => (
      <div key={str} className={styles.petal}></div>
    ))
  return <div className={styles.sakura}>{renderPetal(count)}</div>
}

export default Sakura
