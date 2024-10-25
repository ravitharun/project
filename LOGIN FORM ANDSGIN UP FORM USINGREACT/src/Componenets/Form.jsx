import { useState } from "react";
import axios from "axios";

function Form() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [EMail, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [MsgError, setError] = useState("");

  const userfname = (event) => {
    setFname(event.target.value);
  };

  const userlname = (event) => {
    setLname(event.target.value);
  };
  const useremail = (event) => {
    setemail(event.target.value);
  };
  const userpassword = (event) => {
    setPassword(event.target.value);
  };

  const Getdata = async (event) => {
    event.preventDefault();

    if (Password.length < 7) {
      setError("The Password Length Should Be 7 Or Greater Than 7");
    } else {
      setError("");
      try {
        let responseData = await axios.post("http://localhost:3000/login", {
          firstName: Fname,
          lastName: Lname,
          password: Password, // should be lowercase 'password' to match the backend
          email: EMail,
        });

        console.log(responseData.data.message);
        if (responseData.data.message === "Login successful") {
          alert("Login successful");
setFname("")
setLname("")
setemail("")
setpassword ("")
        } else {
          alert("FAILED TO LOGIN");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="container">
        <h3 className="text-primary">Login</h3>
        <form onSubmit={Getdata}>
          <label htmlFor="firstName" className="text-success mt-4">
            FirstName
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            onChange={userfname}
            autoFocus
          />

          <label htmlFor="lastname" className="text-success mt-4">
            LastName
          </label>
          <input
            type="text"
            name="lastname"
            className="form-control"
            onChange={userlname}
          />
          <label htmlFor="email" className="text-success mt-4">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={useremail}
            required
          />

          <label htmlFor="pword" className="text-success mt-4">
            Password
          </label>
          <input
            type="password"
            name="pword"
            className="form-control"
            onChange={userpassword}
          />

          <h5 className="text-danger">{MsgError}</h5>
          <div className="container text-center grid">
            <div className="row">
              <div className="col-6 col-sm-4">
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>
              <div className="col-6 col-sm-4 mx--100">
                <a className="btn btn-primary" href="/Form2">
                  Form2
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
