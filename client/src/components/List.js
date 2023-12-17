import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReminder } from "../redux/action";
import "./list.css";
const List = () => {
     const { reminderList, loading, error, message } = useSelector((state) => state);
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(getReminder(dispatch));
     }, []);
     console.log(loading, error, message);
     return (
          <div>
               <div class="container">
               <h2>Reminders</h2>
                    <div class="row">
                      {
                        reminderList&&reminderList?.map((item,index)=>(
                          <div class="col-lg-6 mb-4" key={index}>
                          <div class="card">
                               <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">
                                        Date: {item.date}
                                    </p>
                                    <p class="card-text">
                                        Time: {item.time}
                                    </p>
                                    <p class="card-text">
                                        Frequency: {item.frequency}
                                    </p>
                                    <p class="card-text">
                                        Status: {item.status}
                                    </p>
                                    <button type="button" onClick={(e)=>dispatch()} class="btn btn-secondary">Skip</button>
                                    <button type="button" class="btn btn-success">Accept</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
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
