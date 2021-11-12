import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleMakeAdmin = (e) => {
    const user = { email };
    fetch("https://damp-everglades-52916.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("User Make as Admin...");
        }
      });
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h2>Make A Admin</h2>
      <div className="row">
        <div className="col-md-12 w-75 col-sm-12 mx-auto mt-5">
          <form className="row g-3" onSubmit={handleMakeAdmin}>
            <div className="col-auto">
              <label htmlFor="inputPassword2" className="visually-hidden">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onBlur={handleOnBlur}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Make Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
