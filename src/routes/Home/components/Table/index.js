import React, { PropTypes } from 'react'
import './styles.scss'

const Table = ({ data }) => (
  <div className='table'>
    {data.length > 0 &&
      <table>
        <thead>
          <tr>
            <td>X</td>
            <td>Y</td>
          </tr>
        </thead>
        <tbody>
          {data.map(([x, y]) => (
            <tr key={x}>
              <td>{x}</td>
              <td>{y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    }
    {data.length === 0 &&
      <div className='empty-table'>
        You does not have data in learning set, please add them
      </div>
    }
  </div>
)

Table.propTypes = {
  data: PropTypes.array
}

export default Table
