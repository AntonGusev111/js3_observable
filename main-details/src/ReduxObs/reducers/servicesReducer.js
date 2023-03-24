import{
    GET_SERVICES_REQUEST,
    GET_SERVICES_FAILURE,
    GET_SERVICES_SUCCESS
} from "../Actions/actionTypes"



const initialState = {
    items: [],
    loading: false,
    error: null,
  };

export default function serviceReducer(state=initialState, action) {
    switch (action.type) {
        case GET_SERVICES_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case GET_SERVICES_FAILURE:
          const {error} = action.payload;
          return {
            ...state,
            loading: false,
            error,
          };
        case GET_SERVICES_SUCCESS:
          const {items} = action.payload;
          return {
            ...state,
            items,
            loading: false,
            error: null,
          };
        default:
          return state;
      }
}