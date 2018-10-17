// Using NMajor approach from
// http://nmajor.com/posts/using-socket-io-with-redux-websocket-redux-middleware
import io from 'socket.io-client';
const namespaceAddress = 'ws://localhost:5010/competition';
export const socket = io(namespaceAddress, { transports: ['websocket']});

export default function socketMiddleware() {
    return ({ dispatch }) => next => (action) => {
        // Skip the middleware is the action is a function
        if (typeof action === 'function') {
            return next(action);
        }
        
        const { event, leave, handle, ...rest } = action;
        // Skip the middleware if there is not event
        // argument in our action
        if (!event) {
            return next(action);
        }
        // console.log('socket called', event);
        // If there is a leave attribute
        // remove the event listener
        if (leave) {
            socket.removeEventListener(event);
        }
        // Otherwise create a new event listener
        // if handle attribute is a string,
        // change it to a function and dispatch a new action
        let handleEvent = handle;
        if (typeof handleEvent === 'string') {
            handleEvent = result => dispatch({ type: handle, result, ...rest });
        }
        return socket.on(event, handleEvent);
    };
}
