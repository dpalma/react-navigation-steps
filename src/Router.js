import { TabRouter } from '@react-navigation/native';

const Router = options => {
    const router = TabRouter(options);

    return {
        ...router,
        getStateForAction(state, action, options) {
            switch (action.type) {
                case 'FIRST_STEP':
                    return {
                        ...state,
                        index: 0
                    }
                case 'LAST_STEP':
                    return {
                        ...state,
                        index: state.routes.length - 1
                    }
                case 'NEXT_STEP':
                    return {
                        ...state,
                        index: state.index < (state.routes.length - 1) ? (state.index + 1) : (state.routes.length - 1)
                    }
                case 'PREV_STEP':
                    return {
                        ...state,
                        index: state.index > 0 ? (state.index - 1) : 0
                    };
                default:
                    return router.getStateForAction(state, action, options);
            }
        },

        actionCreators: {
            ...router.actionCreators,
            firstStep() {
                return {
                    type: 'FIRST_STEP'
                };
            },
            lastStep() {
                return {
                    type: 'LAST_STEP'
                };
            },
            nextStep() {
                return {
                    type: 'NEXT_STEP'
                };
            },
            prevStep() {
                return {
                    type: 'PREV_STEP'
                };
            },
        },
    };
};

export default Router;
