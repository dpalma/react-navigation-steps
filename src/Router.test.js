import Router from './Router';

const defaultTestState = Object.freeze({
    type: 'steps',
    key: 'root',
    index: 0,
    routeNames: ['A', 'B', 'C'],
    routes: [
      { key: 'A', name: 'A' },
      { key: 'B', name: 'B' },
      { key: 'C', name: 'C' },
    ]
});

test('firstStep action sets step index to 0', () => {
    const router = new Router({});

    const state = {
        ...defaultTestState,
        index: 1
    };

    const result = router.getStateForAction(state, router.actionCreators.firstStep());

    expect(result.index).toEqual(0);
})

test('lastStep action sets step to last valid index', () => {
    const router = new Router({});

    const state = {
        ...defaultTestState,
        index: 0
    };

    const result = router.getStateForAction(state, router.actionCreators.lastStep());

    expect(result.index).toEqual(state.routes.length - 1);
})

test('nextStep action increments step index', () => {
    const router = new Router({});

    const state = {
        ...defaultTestState,
        index: 0
    };

    const result = router.getStateForAction(state, router.actionCreators.nextStep());

    expect(result.index).toEqual(1);
})

test('prevStep action decrements step index', () => {
    const router = new Router({});

    const state = {
        ...defaultTestState,
        index: 1
    };

    const result = router.getStateForAction(state, router.actionCreators.prevStep());

    expect(result.index).toEqual(0);
})

test('prevStep action stops at index 0', () => {
    const router = new Router({});

    const state = {
        ...defaultTestState,
        index: 0
    };

    const result = router.getStateForAction(state, router.actionCreators.prevStep());

    expect(result.index).toEqual(0);
})

test('nextStep action stops at the last valid index', () => {
    const router = new Router({});

    const state = {
        ...defaultTestState,
        index: defaultTestState.routes.length - 1
    };

    const result = router.getStateForAction(state, router.actionCreators.nextStep());

    expect(result.index).toEqual(defaultTestState.routes.length - 1);
})
