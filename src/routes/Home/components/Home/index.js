import React from 'react'
import styles from './styles.scss'
import Plot from '../../containers/PlotContainer'
import Table from '../../containers/TableContainer'
import Controls from '../../containers/ControlsContainer'

export const Home = () => (
  <div className={styles.container}>
    <Plot />
    <Table />
    <Controls />
  </div>
)

export default Home
