import { connect } from 'react-redux'

import App from '../component/app'

function mapDispatchToProps(dispatch) {
    return {
        handleAdd: () => {
            dispatch({
                type: 'ADD'
            })
        }
    }
}

export default connect(state => state, mapDispatchToProps)(App)
