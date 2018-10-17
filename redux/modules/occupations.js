import { combineReducers } from 'redux';
import { occupationsFirestore } from '../../firebase';
import to from '../../utils/to';
// TYPES 
const STORE_MOUNT_POINT = 'app/occupations';
const LOADING = `${STORE_MOUNT_POINT}/LOADING`;
const FETCH_OCCUPATIONS = `${STORE_MOUNT_POINT}/FETCH_OCCUPATIONS`;

// Action creators
const fetchingOccupations = () => async (dispatch, globalState) => {
    dispatch({ type: LOADING, payload: true });
    const [error, response] = await to(occupationsFirestore.get());
    dispatch({ type: LOADING, payload: false });
    let occupationsArray = [];
    response.forEach(doc => {
        occupationsArray = [...occupationsArray, {id: doc.id, ...doc.data()}];
    });
    
    dispatch({ type: FETCH_OCCUPATIONS, payload: occupationsArray });
}

// Reducers Functions
const isLoadingReducer = (state = false, action) => {
    switch(action.type) {
    case LOADING:
        return action.payload;
    default:
        return state;
    }
}

const occupationsReducer = (state = [], action) => {
    switch (action.type) {
    case FETCH_OCCUPATIONS: {
        return [...state, ...action.payload];
    }
    default:
        return state;
    }
}

// Reducer
const reducer = combineReducers({
    isLoading: isLoadingReducer,
    occupations: occupationsReducer,
});

// SELECTORS
const isLoading = state =>
    state[STORE_MOUNT_POINT].isLoading;

const getOccupations = state => 
    state[STORE_MOUNT_POINT].occupations;

const occupations = {
    mountPoint: STORE_MOUNT_POINT,
    actionCreators: { fetchingOccupations },
    selectors: { isLoading, getOccupations },
    reducer,
};

export default occupations;
