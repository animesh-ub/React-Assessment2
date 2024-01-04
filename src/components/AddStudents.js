import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AddStudent = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "date") {
      setDob(value);
    }
    if (id === "radio1" || id === "radio2") {
      setGender(value);
    }
    if (id === "address") {
      setAddress(value);
    }
    if (id === "number") {
      setNumber(value);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!dob) {
      errors.dob = "DOB is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!number) {
      errors.number = "Mobile Number is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(name, dob, gender, address, number);

      axios
        .post("http://localhost:3000/student", {
          name: name,
          dob: dob,
          gender: gender,
          address: address,
          number: number,
        })
        .then((response) => {
          console.log(response);
          // Add any further logic or state updates if needed
        })
        .catch((error) => {
          console.log(error);
          setName("");
          setDob("");
          setGender("");
          setAddress("");
          setNumber("");
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4">Student Data</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{formErrors.name}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                DOB
              </label>
              <input
                type="date"
                value={dob}
                id="date"
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${formErrors.dob ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{formErrors.dob}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Gender:</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    value="Male"
                    id="radio1"
                    onChange={(e) => handleInputChange(e)}
                    checked={gender === "Male"}
                    name="gender"
                    className={`form-check-input ${
                      formErrors.gender ? "is-invalid" : ""
                    }`}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    value="Female"
                    id="radio2"
                    onChange={(e) => handleInputChange(e)}
                    checked={gender === "Female"}
                    name="gender"
                    className={`form-check-input ${
                      formErrors.gender ? "is-invalid" : ""
                    }`}
                  />
                  <label className="form-check-label" htmlFor="radio2">
                    Female
                  </label>
                </div>
              </div>
              <div className="invalid-feedback">{formErrors.gender}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${
                  formErrors.address ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{formErrors.address}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                value={number}
                id="number"
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${
                  formErrors.number ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{formErrors.number}</div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
