import axios from "axios";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currPassword, setCurrPassword] = useState("");
  const [error, setError] = useState("");
  const [errormsg2, setErrormsg2] = useState("");
  const [errormsg3, setErrormsg3] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrPassword, setShowCurrPassword] = useState(false);
  const [checkclickuser, setCheckClickUser] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCurrPasswordChange = (event) => {
    setCurrPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowCurrPassword = () => {
    setShowCurrPassword(!showCurrPassword);
  };

  const handleCheckClick = () => {
    setCheckClickUser(!checkclickuser);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setErrormsg2("");
    setErrormsg3("");

    if (password !== currPassword) {
      setError("PASSWORD IS INCORRECT");
    } else if (!checkclickuser) {
      setErrormsg2("You must agree to the terms and conditions");
    } else if (email === "" || password === "" || currPassword === "") {
      setErrormsg3("PLEASE FILL THE FORM DETAILS");
    } else {
      try {
        let responseData = await axios.post("http://localhost:3000/sigin", {
          email: email,
          password: password,
          currPassword: currPassword,
        });
        console.log(responseData.data);
        if (responseData.data.message === "Sign-in successful") {
          alert("Sign-in successful");
          setEmail("");
          setPassword("");
          setCurrPassword("");
          setCheckClickUser(false);
        } else {
          // console.log
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
        <h2>Sign Up</h2>
        <br />
        <b className="text-success">
          Please fill in this form to create an account.
        </b>
        <hr />
        <form onSubmit={handleSubmit}>
          <label className="text-success mt-4">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <b className="text-danger">{errormsg3}</b>
          <br />
          <label className="text-success mt-4">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={toggleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            <br />
            <b className="text-danger">{errormsg3}</b>
          </div>
          <label className="text-success mt-4">Repeat Password</label>
          <div className="password-container">
            <input
              type={showCurrPassword ? "text" : "password"}
              className="form-control"
              placeholder="Repeat Password"
              value={currPassword}
              onChange={handleCurrPasswordChange}
            />
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={toggleShowCurrPassword}
            >
              {showCurrPassword ? "Hide" : "Show"}
            </button>
            <br />
            <b className="text-danger">{errormsg3}</b>
          </div>
          <br />
          <p className="text-danger">{error}</p>
          <input
            type="checkbox"
            onChange={handleCheckClick}
            checked={checkclickuser}
          />{" "}
          Remember Me
          <br />
          <b className="text-danger">{errormsg2}</b>
          <br />
          <br />
          <p className="text-danger">
            By creating an account you agree to our{" "}
            <a
              href=""
              style={{ textDecorationColor: "blue", cursor: "pointer" }}
            >
              Terms & Privacy.
            </a>
          </p>
          <button type="submit" className="btn btn-primary mt-4">
            Sign up
          </button>
          <a href="/" className="btn btn-primary mt-4">
            login
          </a>
        </form>
      </div>
    </>
  );
}

export default Signin;
