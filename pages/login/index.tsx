import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const correctUsername = "binh";
  const correctPassword = "123";

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem("authenticated", "true"); 
      alert("Login Successful");
      router.push("/posts/add");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
        />
        <button type="submit" style={{ padding: "10px 15px", width: "100%" }}>
          Login
        </button>
        <p style={{ marginTop: "20px" }}>
          Demo Credentials: <br />
          <br />
          Username: binh <br />
          Password: 123
        </p>
      </form>
    </div>
  );
}
