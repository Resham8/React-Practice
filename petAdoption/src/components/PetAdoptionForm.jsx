const PetAdoptionForm = () => {
  return (
    <div className="form">
      <div>
        <label>Pet Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Pet Type</label>
        <select>
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
        <input type="text" />
      </div>
      <div>
        <label>Your Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default PetAdoptionForm;
