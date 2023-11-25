import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { createReminder } from '../redux/action';
const NewReminder = () => {
    const [name,setName]=useState("");
    const [dose,setDose]=useState(1);
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const dispatch=useDispatch();
    const handleSubmit=()=>{
      const data={name,dose,date,time}
      dispatch(createReminder(dispatch,data));
    }
  return (
    <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Add New Reminder</p>
                </div>

                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="medecine name *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setDate(e.target.value)} placeholder="date dd/mm/yyy"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setDose(e.target.value)} placeholder="dose *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setTime(e.target.value)} placeholder="time 12:00 am"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btnSubmit">Submit</button>
                    <button type="button" className="btnCancel">Cancel</button>
                </form>
            </div>
        </div>
  )
}


export default NewReminder;