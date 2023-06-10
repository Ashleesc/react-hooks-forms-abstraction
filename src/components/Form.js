import React, { useState } from "react";

function Form() {
  const [formData, setformData] = useState({
    firstName: "John",
    lastName: "Henry"
  })

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setformData({
      ...formData, [name]: value,
    })
  }

  return (
    <form>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

    // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");  
// function handleFirstNameChange(event) {
  //   setformData({...formData,firstName: event.target.value})   
  // }

  // function handleLastNameChange(event) {
  //   setformData({...formData,lastName: event.target.value})   
  // }

