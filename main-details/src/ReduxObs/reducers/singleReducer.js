import{
    GET_SINGLE_REQUEST,
    GET_SINGLE_FAILURE,
    GET_SINGLE_SUCCESS
} from "../Actions/actionTypes"



const initialState = {
    items: [],
    loading: false,
    error: null,
  };

export default function singleReducer(state=initialState, action) {
    switch (action.type) {
        case GET_SINGLE_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case GET_SINGLE_FAILURE:
          const {error} = action.payload;
          return {
            ...state,
            loading: false,
            error,
          };
        case GET_SINGLE_SUCCESS:
          const {items} = action.payload;
          console.log('reducer',action.payload)
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