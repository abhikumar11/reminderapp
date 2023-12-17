import { GET_REMINDER_FAIL, GET_REMINDER_REQUEST, GET_REMINDER_SUCCESS, NEW_REMINDER_FAIL, NEW_REMINDER_REQUEST, NEW_REMINDER_SUCCESS } from "./constants"
import axios from "axios";
export const createReminder=(dispatch,data)=>async()=>{
    try {
        dispatch({type:NEW_REMINDER_REQUEST})
        const res = await axios.post("http://localhost:3001/medecine/add",{
          name:data.name,
          pill:data.pill,
          date:data.date,
          time:data.time,
          frequency:data.frequency,
          status:data.status
        })
        console.log(res.data);
        dispatch({type:NEW_REMINDER_SUCCESS,payload:res.data})
    } catch (err) {
        dispatch({type:NEW_REMINDER_FAIL,payload:err.message})
    }
}
export const updateReminder=(dispatch,data)=>async()=>{
    try {
        dispatch({type:NEW_REMINDER_REQUEST})
        const res = await axios.post(`http://localhost:3001/medecine/update/${data.id}`,{
          name:data.name,
          pill:data.pill,
          date:data.date,
          time:data.time,
          frequency:data.frequency,
          status:data.status
        })
        console.log(res.data);
        dispatch({type:NEW_REMINDER_SUCCESS,payload:res.data})
    } catch (err) {
        dispatch({type:NEW_REMINDER_FAIL,payload:err.message})
    }
}
export const getReminder=(dispatch)=>async()=>{
    try {
        dispatch({type:GET_REMINDER_REQUEST,payload:"Fetching..."})
        const data = await axios.get("http://localhost:3001/medecine/get")
        console.log(data.data.reminders);
        dispatch({type:GET_REMINDER_SUCCESS,payload:{data:data.data.reminders,message:"Fetched Successfully"}})
    } catch (err) {
        dispatch({type:GET_REMINDER_FAIL,payload:err.message})
    }
}