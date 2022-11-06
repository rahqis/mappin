import React, { useState } from "react";
import "./styles.css";


const initialValues = {
  title: "",
  date: "",
  timeStart: "",
  timeEnd: "",
  location: "",
  link: "",
  notes: "",
};

export default function MakeEvent() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const renderForm = (
        <div classname="form">
                <div classname="input-container"> 
                    <div><label>Event Name: </label></div>
                    <input type="text"
                        value={values.title}
                        onChange={handleInputChange}
                        name="title"
                        //label="Event Name"
                    />
                </div> 
                <div classname="input-container">
                    <div><label>Event Date: </label></div>
                    <input type="date"
                        value={values.date}
                        onChange={handleInputChange}
                        name="date"
                        //label="Event Date"
                    />
                </div>
                <div classname="input-container">
                    <div><label>Event Start Time: </label></div>
                    <input type="text"
                        value={values.timeStart}
                        onChange={handleInputChange}
                        name="timeStart"
                        label="Event Start Time"
                    />
                </div>
                <div classname="input-container"> 
                    <div><label>Event End Time: </label></div>
                    <input type="text"
                        value={values.timeEnd}
                        onChange={handleInputChange}
                        name="timeEnd"
                        label="Event Time End"
                    />
                </div>
                <div classname="input-container">
                    <div><label>Event Location: </label></div>
                    <input type="text"
                        value={values.location}
                        onChange={handleInputChange}
                        name="location"
                        label="Event Location"
                    />
                </div>
                <div classname="input-container">
                    <div><label>Event Info Link: </label></div>
                    <input type="text"
                        value={values.link}
                        onChange={handleInputChange}
                        name="link"
                        label="Event Info Link"
                    />
                </div>
                <div classname="input-container">
                    <div><label>Additional Notes: </label></div>
                    <input type="text"
                        value={values.notes}
                        onChange={handleInputChange}
                        name="notes"
                        label="Additional Notes"
                    />
                </div>
                <div classname="button-container">
                    <input type="submit" />
                </div>
        </div>
  )

 

  return (
        <div className="app">
            <div classname="login-form">
            <div classname="title">Make a New Event</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}  
            </div>
        </div>
  );
}