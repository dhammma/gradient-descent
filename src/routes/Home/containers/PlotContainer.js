import { connect } from 'react-redux'
import { addData } from 'redux/modules/set'
import Plot from '../components/Plot'

const mapStateToProps = ({ set }) => ({ points: set.data })

const mapDispatchToProps = { addPoint: addData }

export default connect(mapStateToProps, mapDispatchToProps)(Plot)
