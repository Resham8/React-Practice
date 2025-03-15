import { Component } from "react";

export class AdopterData extends Component {
  render() {
    const { formData, handleGoBack } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Adopter Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index)=>(
              <tr key={index}>
                <td>{data.petName}</td>
                <td>{data.petTypes}</td>
                <td>{data.breed}</td>
                <td>{data.adopterName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={handleGoBack} style={{
                            padding: "10px 20px", 
                            boxSizing: "border-box",
                            width: "auto", 
                            borderRadius:"15px",
                            display: "inline-block" 
                        }}>Go back</button>
        </div>
      </div>
    );
  }
}

export default AdopterData;
