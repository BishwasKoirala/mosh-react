import React, { FormEvent, useRef } from "react";

const Form = () => {
  //common practice is to pass null as initial value 
  const nameRef =  useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  //well thinking about sending to server
  const person = {name : '' , age : 0}

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();
    if (nameRef.current){
      console.log(nameRef.current.value)
      person.name = nameRef.current?.value
    }
    if (ageRef.current){
      console.log(ageRef.current.value)
      person.age = parseInt(ageRef.current.value)

      console.log(person)
    }
    
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
