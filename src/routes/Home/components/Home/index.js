import React from 'react'
import styles from './styles.scss'
import Plot from '../Plot'

console.log(styles)

export const Home = () => (
  <div className={styles.container}>
    <Plot />
  </div>
)

export default Home
