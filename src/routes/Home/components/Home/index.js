import React from 'react'
import styles from './styles.scss'
import Plot from '../../containers/PlotContainer'
import Table from '../../containers/TableContainer'

export const Home = () => (
  <div className={styles.container}>
    <Plot />
    <Table />
  </div>
)

export default Home
