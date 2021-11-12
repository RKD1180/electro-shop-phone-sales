import React, { useState } from "react";
import useAuth from "../../hook/useAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [user, setUser] = useState({});
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from;

  const initialInfo = {};

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...userInfo };
    newInfo[field] = value;
    setUserInfo(newInfo);
  };
  const [userInfo, setUserInfo] = useState(initialInfo);

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // add user in database
    const user = {
      ...userInfo,
    };
    const url = `https://damp-everglades-52916.herokuapp.com/users`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
        }
      });
    console.log("user:", user);

    isLogin
      ? procesLogin(email, password)
      : createUser(email, password, user.name);
  };

  const procesLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert("User login Successfully");
        history.push(redirect);
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const createUser = (email, password, name) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert("User Add Successfully");
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.push(redirect);

        // ...
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
    console.log(user);

    return {
      user,
    };
  };

  const toggle = (e) => {
    setIsLogin(e.target.value);
  };

  return (
    <div className="container mb-5">
      <h2 className="mt-4 mb-3">Please {isLogin ? "Login" : "Register"}</h2>
      <div className="row">
        <div className="form text-start w-50 mx-auto border shadow p-5 rounded">
          <form onSubmit={handleRegistration}>
            {isLogin || (
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter Your Name
                </label>
                <input
                  onBlur={handleEmailChange}
                  onChange={handleOnBlur}
                  name="name"
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Your Email
              </label>
              <input
                onBlur={handleEmailChange}
                onChange={handleOnBlur}
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onBlur={handlePasswordChange}
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                onChange={toggle}
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Already Register
              </label>
            </div>
            <div className="row mb-3 mt-3 text-danger">{error}</div>
            <button type="submit" className="btn btn-primary">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div className="mx-auto">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-warning p-3 mt-3 mx-auto"
            >
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
