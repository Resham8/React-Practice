import { useState } from "react";

const PetAdoptionForm = () => {

  const [values, setValues] = useState({
    petName: '',
    petTypes: '',
    bread: '',
    yourName: '',
    email:'',
    phone: ''
  })

  function handleChanges(e){
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  function handleSubmit(event) {   
    event.preventDefault(); 
    console.log(values)
  }

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Pet Name</label>
        <input type="text" name="petName" onChange={(e) => handleChanges(e)} />
      </div>
      <div>
        <label>Pet Type</label>
        <select name="petTypes" onChange={(e) => handleChanges(e)}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="fish">Fish</option>
          <option value="rabbit">Rabbit</option>
          <option value="hamster">Hamster</option>
          <option value="turtle">Turtle</option>
          <option value="reptile">Reptile</option>
          <option value="otter">Otter</option>
        </select>
      </div>
      <div>
        <label>Bread</label>
        <input type="text" name="bread" onChange={(e) => handleChanges(e)} />
      </div>
      <div>
        <label>Your Name</label>
        <input type="text" name="yourName" onChange={(e) => handleChanges(e)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={(e) => handleChanges(e)} />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" onChange={(e) => handleChanges(e)} />
      </div>
      <div style={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
        <button type="submit">Submit</button>
        <button>Reset</button>
      </div>
    </form>
    </>    
  );
};

export default PetAdoptionForm;
