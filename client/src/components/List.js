import React, { useEffect, useState } from "react";
import "./list.css";
import { useDispatch, useSelector } from 'react-redux'
import { getReminder } from "../redux/action";
const List = () => {
     const dispatch = useDispatch();
     const reminderList=useSelector((state)=>state.reminderList)
     useEffect(()=>{
          dispatch(getReminder(dispatch))
          
     },[]);
     
     console.log(reminderList);
     return (
          <div>
               <div className="container register-form">
                    <div className="form">
                    {
                    reminderList&&reminderList?.map((item,index)=>(
                         <div key={index}>
                         <div className="header">
                              <p>Reminder</p>
                         </div>
                         <div className="reminder-content">
                        
                         <div>
                              
                                        <div className="row">
                                        <div className="col-md-6">
                                             <div className="form-group">
                                             <span><label>Name: {item.name}</label></span>
                                             </div>
                                             <div className="form-group">
                                             <span><label>Dose: {item.dose}</label></span>
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                             <div className="form-group">
                                             <span><label>Date:{item.date}</label></span>
                                             </div>
                                             <div className="form-group">
                                             <span><label>Time:{item.time}</label></span>
                                             </div>
                                        </div>
                                   </div>
                                   </div>
                         </div>
                    </div>
                    ))          
}
               </div>
          </div>
          </div>
     );
};

export default List;
