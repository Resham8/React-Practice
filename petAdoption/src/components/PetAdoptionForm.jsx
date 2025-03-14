import { useState } from "react";
import { validation } from "../utils/validation";

const PetAdoptionForm = () => {
  const [values, setValues] = useState({
    petName: "",
    petTypes: "dog",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    petName: "",
    petTypes: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });

  const [showTable, setShowTable] = useState(false);

  function handleChanges(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let errorsCopy = { ...errors };
    const errorRen = validation(name, value, errorsCopy);
    setErrors(errorRen);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !values.petName ||
      !values.petTypes ||
      !values.breed ||
      !values.adopterName ||
      !values.email ||
      !values.phone
    ) {
      alert("Please fill the details");
      return;
    }

    console.log(values);
  }

  function handleReset() {
    setValues({
      petName: "",
      petTypes: "",
      breed: "",
      adopterName: "",
      email: "",
      phone: "",
    });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Pet Name</label>
          <input
            type="text"
            name="petName"
            onChange={(e) => handleChanges(e)}
            value={values.petName}
          />
          <small>{errors.petName}</small>
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
          <small>{errors.petTypes}</small>
        </div>
        <div>
          <label>Breed</label>
          <input
            type="text"
            name="breed"
            onChange={(e) => handleChanges(e)}
            value={values.breed}
          />
          <small>{errors.breed}</small>
        </div>
        <div>
          <label>Adopter Name</label>
          <input
            type="text"
            name="adopterName"
            onChange={(e) => handleChanges(e)}
            value={values.adopterName}
          />
          <small>{errors.adopterName}</small>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChanges(e)}
            value={values.email}
          />
          <small>{errors.email}</small>
        </div>
        <div style={{marginBottom:"10px"}}>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={(e) => handleChanges(e)}
            value={values.phone}
          />
          <small>{errors.phone}</small>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%"
          }}
        >
          <button type="submit">Submit</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
    </>
  );
};

export default PetAdoptionForm;
