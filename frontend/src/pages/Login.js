import { useState } from "react";
import axios from "axios";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/login",
        {
          username,
          password
        }
      );

      console.log(
        "JWT TOKEN:",
        response.data.token
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert(
        "Login Successful"
      );

      window.location.reload();

    } catch (error) {

      console.log(
        "FULL ERROR"
      );

      console.log(
        error
      );

      console.log(
        "ERROR RESPONSE"
      );

      console.log(
        error.response
      );

      console.log(
        "ERROR REQUEST"
      );

      console.log(
        error.request
      );

      if (
        error.response
      ) {

        alert(
          error.response.data.message
        );

      } else {

        alert(
          "Login Failed"
        );

      }

    }

  };

  return (

    <div
      style={{
        padding: "50px"
      }}
    >

      <h1>
        Smart Car Login
      </h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={
          handleLogin
        }
      >
        Login
      </button>

    </div>

  );

}

export default Login;