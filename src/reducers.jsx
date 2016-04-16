const initialState = {
    count: 1
}

export default function lepusApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            {
                return {
                    count: state.count + 1
                }
            }
        default:
            {
                return state
            }
    }
}
