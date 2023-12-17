import { GET_REMINDER_FAIL, GET_REMINDER_REQUEST, GET_REMINDER_SUCCESS, NEW_REMINDER_FAIL, NEW_REMINDER_REQUEST, NEW_REMINDER_SUCCESS } from "./constants";
const initialState ={
    loading: false,
    reminderList:[],
}
function reminderReducer(state=initialState,action){
     switch (action.type) {
            case GET_REMINDER_REQUEST:
                return {...state,locading:true}
            case GET_REMINDER_SUCCESS:
                console.log(action.payload.data)
                return {...state,reminderList:action.payload.data,message: action.payload.message}
            case GET_REMINDER_FAIL:
                return {...state,loading:true,error:action.payload}
            case NEW_REMINDER_REQUEST:
                return {...state}
            case NEW_REMINDER_SUCCESS:
                return {...state,reminderList:[...state.reminderList,...action.payload]}
            case NEW_REMINDER_FAIL:
                return {...state,loading:true,error:action.payload}
            default:
                return state
     }
}
export default reminderReducer;