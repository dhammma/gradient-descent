import { connect } from 'react-redux'
import Table from '../components/Table'

const mapStateToProps = ({ set }) => ({ data: set.data })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
