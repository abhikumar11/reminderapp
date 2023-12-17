import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import "./newreminder.css";
import { createReminder } from '../redux/action';
const NewReminder = () => {
    const [name,setName]=useState("");
    const [pill,setPill]=useState(1);
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [frequency,setFrequency]=useState("Once");
    const [status,setStatus]=useState("Not Taken");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
      const data={name,pill,date,time,frequency,status}
      dispatch(createReminder(dispatch,data));
      console.log(data);
    }
    const handleStatus=(e)=>{
       setStatus(e.target.value);
      }
      const handleFrequency=(e)=>{
        setFrequency(e.target.value);
       }
  return (
    <div className="container register">
    <div className="row">
        <div className="col-md-3 register-left">
            <img src="logo513.jpg" alt=""/>
            <p>Stay Healthy & Never Miss Your Medicine </p>
        </div>
        <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h3 className="register-heading">Add New Reminder</h3>
                    <form onSubmit={handleSubmit}>
                    <div className="row register-form">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name *" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setDate(e.target.value)}  placeholder="Date *"/>
                            </div>
                            <div className="form-group">
                                <select className="form-control" value={frequency} onChange={handleFrequency}>
                                    <option className="hidden">Frequency</option>
                                    <option value="Once">Once</option>
                                    <option value="Weekly">Weekly</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setPill(e.target.value)} placeholder="Pill(s) *" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e)=>setTime(e.target.value)} placeholder="Time *"/>
                            </div>
                            <div className="form-group">
                                <select className="form-control" value={status} onChange={handleStatus}>
                                    <option value="Not Taken"  className="hidden" >Not Taken</option>
                                    <option value="Skip" >Skip</option>
                                    <option value="Take">Taken</option>
                                </select>
                            </div>
                            <button type="submit" className="btnRegister">Submit</button>
                            <button type="button" className="btnCancel">Cancel</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewReminder