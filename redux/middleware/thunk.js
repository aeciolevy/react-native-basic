export default store => next => action =>
    typeof action === 'function' ?
        action(store.dispatch, store.getState) : // Let it dispatch as many as it wants
        next(action);
