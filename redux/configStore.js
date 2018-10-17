import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/reducer';
import thunk from './middleware/thunk';

const configureStore = () => {
    const middlewares = [];
    // Call them as the actions propagate through them
    middlewares.push(thunk);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

    const store = createStore(
        rootReducer,
        {},
        process.env.NODE_ENV === 'production' ? applyMiddleware(...middlewares) : composeEnhancers(applyMiddleware(...middlewares)),
    );

    return store;
};

export default configureStore;
